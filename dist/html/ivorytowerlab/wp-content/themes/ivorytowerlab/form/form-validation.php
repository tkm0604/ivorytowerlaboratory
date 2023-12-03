<?php

function validateFormData($postData)
{
    $errors = [];

    // 会社名のバリデーション
    if (empty($postData['company-name'])) {
        $errors['company-name'] = '会社名は必須です。';
    }

    // 担当者名のバリデーション
    if (empty($postData['pic'])) {
        $errors['pic'] = '担当者名は必須です。';
    }

    // 担当者名(フリガナ)のバリデーション
    if (empty($postData['pic-kana'])) {
        $errors['pic-kana'] = '担当者名(フリガナ)は必須です。';
    }elseif (!preg_match('/^[ァ-ヶー]+$/u', $postData['pic-kana'])) {
        // カタカナのみ許容する正規表現
        $errors['pic-kana'] = '担当者名(フリガナ)はカタカナで入力してください。';
    }

    // メールアドレスのバリデーション
    if (empty($postData['email'])) {
        $errors['email'] = 'メールアドレスは必須です。';
    } elseif (!filter_var($postData['email'], FILTER_VALIDATE_EMAIL)) {
        // メールアドレスの形式チェック
        $errors['email'] = '無効なメールアドレスです。';
    }


// 電話番号が入力されているが、条件を満たしていない場合にエラーを設定
if ((!empty($postData['tel-1']) && !preg_match('/^\d{1,4}$/', $postData['tel-1'])) ||
    (!empty($postData['tel-2']) && !preg_match('/^\d{1,4}$/', $postData['tel-2'])) ||
    (!empty($postData['tel-3']) && !preg_match('/^\d{1,4}$/', $postData['tel-3']))) {
    $errors['tel'] = '電話番号は、半角数字のみで、各セグメントは4文字以下です。';
}

    // お問い合わせ内容のバリデーション
    if (empty($postData['msg'])) {
        $errors['msg'] = 'お問い合わせ内容は必須です。';
    }      
    return $errors;
}
