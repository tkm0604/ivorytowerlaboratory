<div class="formStatus_complete">
    <p class="formStatus_complete__headding">フォームが送信されました。</p>
    <p class="formStatus_complete__txt">お問い合わせ頂きありがとうございます。<br>
        担当者より1-3営業日以内にご連絡をいたします。</p>
    <a class="formStatus_complete__link" href="/">TOPへ戻る</a>
</div>
<!-- 送信に失敗した時 -->
<?php if ($errorMessage ==  '') : ?>
    <!-- 送信のメッセージを表示 -->
    <p><?php echo $errorMessage ?></p>
<?php endif; ?>

