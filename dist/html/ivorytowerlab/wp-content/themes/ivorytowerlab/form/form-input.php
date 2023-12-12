<?php if ($recap  != 'error') : ?>
    <form class="p-form" method="post" action="#contact" enctype="multipart/form-data">
        <table class="p-contact-body">
            <tbody>

                <tr class="p-input-item">
                    <th class="p-input-item__inner">
                        <p class="p-input-item__inner-title">会社名</p>
                        <p><span class="p-input-item__inner-req">必須</span></p>
                    </th>
                    <td class="p-input-info">
                        <input type="text" name="company-name" class="p-input-info__txt" size="60" value="<?php echo htmlspecialchars($_SESSION['formData']['company-name'] ?? ''); ?>">
                        <p class="p-input-info__error">
                            <?php if (isset($errors['company-name'])) : ?>
                        <p class="p-input-info__error"><?php echo  $errors['company-name']; ?></p>
                    <?php endif; ?>
                    </p>
                    </td>
                </tr>

                <tr class="p-input-item">
                    <th class="p-input-item__inner">
                        <p class="p-input-item__inner-title">担当者名</p>
                        <p><span class="p-input-item__inner-req">必須</span></p>
                    </th>
                    <td class="p-input-info">
                        <input type="text" name="pic" class="p-input-info__txt" size="60" value="<?php echo htmlspecialchars($_SESSION['formData']['pic'] ?? ''); ?>" placeholder="例）山田太郎">
                        <?php if (isset($errors['pic'])) : ?>
                            <p class="p-input-info__error"><?php echo  $errors['pic']; ?></p>
                        <?php endif; ?>
                    </td>
                </tr>

                <tr class="p-input-item">
                    <th class="p-input-item__inner">
                        <p class="p-input-item__inner-title">担当者名(フリガナ)</p>
                        <p><span class="p-input-item__inner-req">必須</span></p>
                    </th>
                    <td class="p-input-info">
                        <input type="text" name="pic-kana" class="p-input-info__txt" size="60" value="<?php echo htmlspecialchars($_SESSION['formData']['pic-kana'] ?? ''); ?>" placeholder="例）ヤマダタロウ">
                        <?php if (isset($errors['pic-kana'])) : ?>
                            <p class="p-input-info__error"><?php echo  $errors['pic-kana']; ?></p>
                        <?php endif; ?>
                    </td>
                </tr>

                <tr class="p-input-item">
                    <th class="p-input-item__inner">
                        <p class="p-input-item__inner-title">メールアドレス</p>
                        <p><span class="p-input-item__inner-req">必須</span></p>
                    </th>
                    <td class="p-input-info">
                        <input type="email" name="email" class="p-input-info__txt" size="60" value="<?php echo htmlspecialchars($_SESSION['formData']['email'] ?? ''); ?>" placeholder="例）mail@example.com">
                        <?php if (isset($errors['email'])) : ?>
                            <p class="p-input-info__error"><?php echo  $errors['email']; ?></p>
                        <?php endif; ?>
                    </td>
                </tr>

                <tr class="p-input-item">
                    <th class="p-input-item__inner">
                        <p class="p-input-item__inner-title">電話番号</p>
                    </th>
                    <td class="p-input-info">
                        <div class="mwform-tel-field p-input-tell">
                            <input type="text" name="tel-1" class="p-input-tell__number" size="6" maxlength="5" value="<?php echo htmlspecialchars($_SESSION['formData']['tel-1'] ?? ''); ?>">
                            - <input type="text" name="tel-2" class="p-input-tell__number" size="5" maxlength="4" value="<?php echo htmlspecialchars($_SESSION['formData']['tel-2'] ?? ''); ?>">
                            - <input type="text" name="tel-3" class="p-input-tell__number" size="5" maxlength="4" value="<?php echo htmlspecialchars($_SESSION['formData']['tel-3'] ?? ''); ?>">
                        </div>
                        <?php if (isset($errors['tel'])) : ?>
                            <p class="p-input-info__error"><?php echo $errors['tel']; ?></p>
                        <?php endif; ?>
                    </td>
                </tr>

                <tr class="p-input-item">
                    <th class="p-input-item__inner">
                        <p class="p-input-item__inner-title">お問い合わせ内容</p>
                        <p><span class="p-input-item__inner-req">必須</span></p>
                    </th>
                    <td class="p-input-info">
                        <textarea name="msg" class="p-input-info__textarea" cols="30" rows="5"><?php echo htmlspecialchars($_SESSION['formData']['msg'] ?? ''); ?></textarea>
                        <?php if (isset($errors['msg'])) : ?>
                            <p class="p-input-info__error"><?php echo  $errors['msg']; ?></p>
                        <?php endif; ?>
                    </td>
                </tr>

            </tbody>
        </table>
        <input type="hidden" name="recaptcha_response" id="recaptchaResponse">

        <div class="c-submit">
            <input type="submit" name="submitConfirm" value="確認画面へ" class="c-submit__button">
        </div>

        <?php wp_nonce_field('my-form', 'myform_nonce') ?>
    </form>
    
<?php else : ?>
    <div class="formStatus_complete">
        <p class="formStatus_complete__txt">申し訳ありませんが、セキュリティ認証に失敗しました。<br> <a class="formStatus_complete__link" href="/">TOPへ戻る</a>からページをリロードしてもう一度お試しいただくか、しばらくしてから再度お問い合わせください。</p>
    </div>
<?php endif; ?>

<script src="https://www.google.com/recaptcha/api.js?render=6LctMSUpAAAAAN28mFY3Z9hiCXUfuFUUVe_AhlrW"></script>
<script>
    grecaptcha.ready(function() {
        grecaptcha.execute('6LctMSUpAAAAAN28mFY3Z9hiCXUfuFUUVe_AhlrW', {
            action: 'submit'
        }).then(function(token) {
            // トークンをフォームに追加
            document.getElementById('recaptchaResponse').value = token;
        });
    });
</script>