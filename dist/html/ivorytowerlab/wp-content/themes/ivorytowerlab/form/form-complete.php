<div class="formStatus_complete">

    <!-- reCAPTCHAエラーが出た時にメッセージ表示 -->
    <?php if ($reCAPTCHAError != '') : ?>
        <p>reCAPTCHAの検証に失敗しました。もう一度試してください。</p>
        <button type="submit" name="submitBack" value="back" class="">戻る</button>
    <?php endif; ?>
    <!-- reCAPTCHA懸賞をパスしたら以下を表示 -->
    <?php if (empty($sendError)) : ?>
        <!-- 送信のメッセージを表示 -->
        <p class="formStatus_complete__headding">フォームが送信されました。</p>
        <p class="formStatus_complete__txt">お問い合わせ頂きありがとうございます。<br>
            担当者より1-3営業日以内にご連絡をいたします。</p>
        <a class="formStatus_complete__link" href="/wp">TOPへ戻る</a>
    <?php else : ?>
        <!-- 送信に失敗した時 -->
        <p class="formStatus_complete__txt">送信に失敗しました。</p>
    <?php endif; ?>
    
</div>