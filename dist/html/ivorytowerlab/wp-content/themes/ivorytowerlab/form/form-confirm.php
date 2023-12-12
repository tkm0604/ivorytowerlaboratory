<?php if ($senderror == '') : ?>
  <form class="p-form" method="post" action="" enctype="multipart/form-data">
    <table class="p-contact-body">
      <tbody>
        <tr class="p-input-item">
          <th class="p-input-item__inner">
            <p class="p-input-item__inner-title">会社名</p>
            <p><span class="p-input-item__inner-req">必須</span></p>
          </th>
          <td class="p-input-info">
            <p class="p-input-info__txt"><?php echo $_POST['company-name']; ?></p>
            <input type="hidden" name="company-name" class="p-input-info__txt" size="60" value="<?php echo $_POST['company-name']; ?>" placeholder="例）株式会社ABC">
          </td>
        </tr>
        <tr class="p-input-item">
          <th class="p-input-item__inner">
            <p class="p-input-item__inner-title">担当者名</p>
            <p><span class="p-input-item__inner-req">必須</span></p>
          </th>
          <td class="p-input-info">
            <p class="p-input-info__txt"><?php echo $_POST['pic']; ?></p>
            <input type="hidden" name="pic" class="p-input-info__txt" size="60" value="<?php echo $_POST['pic']; ?>" placeholder="例）山田太郎">
          </td>
        </tr>
        <tr class="p-input-item">
          <th class="p-input-item__inner">
            <p class="p-input-item__inner-title">担当者名(フリガナ)</p>
            <p><span class="p-input-item__inner-req">必須</span></p>
          </th>
          <td class="p-input-info">
            <p class="p-input-info__txt"><?php echo $_POST['pic-kana']; ?></p>
            <input type="hidden" name="pic-kana" class="p-input-info__txt" size="60" value="<?php echo $_POST['pic-kana']; ?>" placeholder="例）ヤマダタロウ">
          </td>
        </tr>
        <tr class="p-input-item">
          <th class="p-input-item__inner">
            <p class="p-input-item__inner-title">メールアドレス</p>
            <p><span class="p-input-item__inner-req">必須</span></p>
          </th>
          <td class="p-input-info">
            <p class="p-input-info__txt"><?php echo $_POST['email']; ?></p>
            <input type="hidden" name="email" class="p-input-info__txt" size="60" value="<?php echo $_POST['email']; ?>" placeholder="例）mail@example.com">
          </td>
        </tr>
        <tr class="p-input-item">
          <th class="p-input-item__inner">
            <p class="p-input-item__inner-title">電話番号</p>
          </th>
          <td class="p-input-info">
            <div class="mwform-tel-field p-input-tell">
              <?php if ($_POST['tel-1'] == '' and $_POST['tel-2'] == '' and  $_POST['tel-3'] == '') : ?>
                <p>未入力</p>
              <?php else : ?>
                <span class="p-input-info__txt"><?php echo $_POST['tel-1']; ?></span>
                <span class="p-input-info__txt">-</span>
                <span class="p-input-info__txt"><?php echo $_POST['tel-2']; ?></span>
                <span class="p-input-info__txt">-</span>
                <span class="p-input-info__txt"><?php echo $_POST['tel-3']; ?></span>
              <?php endif ?>
              <input type="hidden" name="tel-1" class="p-input-tell__number" size="6" maxlength="5" value="<?php echo $_POST['tel-1']; ?>">
              <input type="hidden" name="tel-2" class="p-input-tell__number" size="5" maxlength="4" value="<?php echo $_POST['tel-2']; ?>">
              <input type="hidden" name="tel-3" class="p-input-tell__number" size="5" maxlength="4" value="<?php echo $_POST['tel-3']; ?>">

            </div>
          </td>
        </tr>
        <tr class="p-input-item">
          <th class="p-input-item__inner">
            <p class="p-input-item__inner-title">お問い合わせ内容</p>
            <p><span class="p-input-item__inner-req">必須</span></p>
          </th>
          <td class="p-input-info">
            <input type="hidden" value="<?php echo $_POST['msg']; ?>" name="msg">
            <?php echo $_POST['msg']; ?>
          </td>
        </tr>
      </tbody>
    </table>
    <?php wp_nonce_field('my-form', 'myform_nonce') ?>
    <div class="c-submit">
      <button type="submit" name="submitBack" value="back" class="c-submit__button">戻る</button>
      <br>
      <input type="submit" name="submitFinal" value="送信する" class="c-submit__button">
    </div>
  </form>
  <!-- //確認画面でのPOSTの際にバリデーションに引っ掛かると、エラーメッセージを表示して$_POSTを空にする。input画面に戻る -->
<?php else : ?>
  <div class="formStatus_complete">
    <p class="formStatus_complete__txt">不正な入力が検知され、送信に失敗しました。</p>
    <p class="formStatus_complete__txt">以下の戻るボタンより、再度入力いただくか、<a href="mailto:info@ivorytowerlab.jp">info@ivorytowerlab.jp</a>までご連絡ください。</p>
    <form method="post">
      <input type="submit" name="submitBack" value="戻る" class="formStatus_complete__link">
    </form>
  </div>
<?php endif; ?>