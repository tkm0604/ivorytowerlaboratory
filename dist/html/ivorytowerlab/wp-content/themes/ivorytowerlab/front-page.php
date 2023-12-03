<?php

session_start();

// 'formStatus'が設定されていない場合に初期化
if (!isset($_SESSION['formStatus'])) {
  $_SESSION['formStatus'] = 'input'; // デフォルトの状態
}

include_once 'form/form-validation.php'; // バリデーションファイルの読み込み

// フォームデータをセッションに保存
function saveFormData()
{
  if (!empty($_POST)) {
    foreach ($_POST as $key => $value) {
      $_SESSION['formData'][$key] = $value;
    }
  }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $errors = validateFormData($_POST); // フォームデータのバリデーション
  saveFormData(); // フォームデータを保存

  // バリデーションエラーがある場合、フォームステータスを 'input' に設定
  if (!empty($errors)) {
    $_SESSION['formStatus'] = 'input';
  } else {
    // バリデーションエラーがない場合、次のフォームステータスに進む
    if (isset($_POST["submitConfirm"])) {
      $_SESSION['formStatus'] = 'confirm';
    }
    // elseif (isset($_POST["submitFinal"])) {
    //   $_SESSION['formStatus'] = 'complete';
    // }
  }
}


// POSTリクエストがない場合は、フォーム状態をリセット
if ($_SERVER["REQUEST_METHOD"] != "POST") {
  if (isset($_SESSION['formStatus']) && $_SESSION['formStatus'] == 'complete') {
    $_SESSION['formStatus'] = 'input';
    // セッションデータをクリア
    unset($_SESSION['formData']);
  }
}



// フォームデータを取得するためのヘルパー関数
function getSavedValue($key)
{
  return isset($_SESSION['formData'][$key]) ? $_SESSION['formData'][$key] : '';
}

$companyName = isset($_POST['company-name']) ? $_POST['company-name'] : '';
$pic = isset($_POST['pic']) ? $_POST['pic'] : '';
$picKana = isset($_POST['pic-kana']) ? $_POST['pic-kana'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$tel1 = isset($_POST['tel-1']) ? $_POST['tel-1'] : '';
$tel2 = isset($_POST['tel-2']) ? $_POST['tel-2'] : '';
$tel3 = isset($_POST['tel-3']) ? $_POST['tel-3'] : '';
$msg = isset($_POST['msg']) ? $_POST['msg'] : '';


// お客様向けフォームの送信処理
if ($_SERVER["REQUEST_METHOD"] == "POST" && $_SESSION['formStatus'] == 'confirm') {
  if (isset($_POST["submitFinal"])) {

    // フォームデータをメールで送信
    $to = $_SESSION['formData']['email']; // 送信先のメールアドレス
    $subject = 'ivorytowerへお問い合わせありがとうございます。';
    $message = "会社名: " . $_SESSION['formData']['company-name'] . "\n"
      . "担当者名: " . $_SESSION['formData']['pic'] . "\n"
      . "担当者名カナ: " . $_SESSION['formData']['pic-kana'] . "\n"
      . "メールアドレス: " . $_SESSION['formData']['email'] . "\n"
      . "電話番号: " . $_SESSION['formData']['tel-1'] . "-" . $_SESSION['formData']['tel-2'] . "-" . $_SESSION['formData']['tel-3'] . "\n"
      . "メッセージ: " . $_SESSION['formData']['msg'];
    $headers = 'From: info@ivorytowerlab.jp'; // 送信元のメールアドレス

    $sent = wp_mail($to, $subject, $message, $headers);

        // フォームデータをメールで送信
        $to = ' info@ivorytowerlab.jp'; // 送信先のメールアドレス
        $subject = 'ivorytowerへお問い合わせが届いています。';
        $message = "会社名: " . $_SESSION['formData']['company-name'] . "\n"
          . "担当者名: " . $_SESSION['formData']['pic'] . "\n"
          . "担当者名カナ: " . $_SESSION['formData']['pic-kana'] . "\n"
          . "メールアドレス: " . $_SESSION['formData']['email'] . "\n"
          . "電話番号: " . $_SESSION['formData']['tel-1'] . "-" . $_SESSION['formData']['tel-2'] . "-" . $_SESSION['formData']['tel-3'] . "\n"
          . "メッセージ: " . $_SESSION['formData']['msg'];
        $headers = 'From:'.$_SESSION['formData']['email']; // 送信元のメールアドレス
    
        $sent = wp_mail($to, $subject, $message, $headers);

    if ($sent) {
      // メール送信が成功した場合の処理
      $_SESSION['formStatus'] = 'complete';
      // セッションデータをクリア
      unset($_SESSION['formData']);
      // 完了ページにリダイレクトする場合
    } else {
      echo '送信に失敗しました。';
    }
  }
}

?>

<?php get_header(); ?>

<main class="l-main">

  <div id="mv" class="p-mv">
    <div class="p-mv__inner">
      <img class="p-mv__img" src="/assets/img/common/Ivory_Tower_Top_Logo.png" alt="IvoryTowerLaboratory" width="378" height="222">
      <img class="p-mv__title" src="/assets/img/common/Ivory_Tower_Labrtory.png" alt="IvoryTowerLaboratory" width="417" height="47">
    </div>
  </div>

  <section id="about-me" class="p-about-me">
    <div class="p-about-me__inner">
      <h2 class="c-section-title">About Me</h2>
      <div class="p-about-me-contents">
        <?php
        $args = array(
          'post_type' => 'about_me',
          'posts_per_page' => 1
        );
        $about_me_query = new WP_Query($args);

        if ($about_me_query->have_posts()) :
          while ($about_me_query->have_posts()) : $about_me_query->the_post();
        ?>
            <?php if (has_post_thumbnail()) : ?>
              <?php
              $thumbnail_id = get_post_thumbnail_id($post->ID); // 投稿のサムネイルIDを取得
              $thumbnail = wp_get_attachment_image_src($thumbnail_id, 'full'); // 画像のURLを取得
              if ($thumbnail) {
                $thumbnail_src = $thumbnail[0]; // 画像のURL
              }
              ?>
              <img class="p-about-me-contents__img" src="<?php echo esc_url($thumbnail_src); ?>" alt="About Me" width="250" height="250">
            <?php endif ?>
            <div class="p-about-me-txt">

              <div class="p-about-me-txt__wrap">
                <p class="p-about-me-txt__heading"><?php echo SCF::get('about_me'); ?></p>
                <span class="p-about-me-txt__strong">経歴</span>
                <div class="p-about-me-career">

                  <p class="p-about-me-career__txt">
                    <?php echo SCF::get('career'); ?>
                  </p>
                </div>
              </div>

              <div class="p-about-me-txt__wrap">
                <span class="p-about-me-txt__strong">スキル</span>
                <?php $skills = SCF::get('skill'); ?>
                <ul class="p-about-me-career">
                  <?php foreach ($skills as $skill) : ?>
                    <li class="p-about-me-career__list">・<?php echo esc_html($skill); ?></li>
                  <?php endforeach; ?>
                </ul>
              </div>
            </div>
          <?php endwhile; ?>
        <?php else : ?>
          <p>投稿がありません</p>
        <?php endif;
        wp_reset_postdata();
        ?>
      </div>
    </div>
  </section>

  <section id="works" class="p-works">
    <div class="p-works__inner">
      <h2 class="c-section-title">Works</h2>

      <div class="p-works-contents">
        <?php
        $args = array(
          'post_type' => 'works',
          'posts_per_page' => -1
        );
        $works_query = new WP_Query($args);

        if ($works_query->have_posts()) :
          while ($works_query->have_posts()) : $works_query->the_post();
        ?>
            <article class="p-works-item">

              <h3 class="p-works-item-txt__title"><?php the_title(); ?></h3>
              <?php if (has_post_thumbnail()) : ?>
                <a class="p-works_item__link" href="<?php echo SCF::get('url') ?>" target="_blank" rel="noopener noreferrer"><img class="p-works_item__link_img" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>"> </a>
              <?php endif ?>
              <p class="p-works-item-txt__heading">[制作時期]</p>
              <p><?php echo SCF::get('year'); ?>年</p>
              <p class="p-works-item-txt__heading">[使用技術]</p>
              <?php
              $technologies = SCF::get('technology'); ?>
              <ul class="p-works-item-txt__list">
                <?php foreach ($technologies as $technology) : ?>
                  <li class="p-works-item-txt__list_item"><?php echo esc_html($technology); ?></li>
                <?php endforeach; ?>
              </ul>
              <?php if (SCF::get('git') !== "") : ?>
                <p class="p-works-item-txt__heading">[Git]</p>
                <p><a class="p-works-item-txt__link" href="<?php echo SCF::get('git'); ?>" target="_blank" rel="noopener noreferrer"><?php echo SCF::get('git'); ?></a></p>
              <?php endif; ?>
              <p class="p-works-item-txt__heading">[コメント]</p>
              <p><?php echo SCF::get('comment'); ?></p>

              <?php if (SCF::get('basic_id') !== "") : ?>
                <p class="p-works-item-txt__heading">[Basic認証]</p>
                <p>ID : <?php echo SCF::get('basic_id'); ?>/ PW : <?php echo SCF::get('basic_pw'); ?></p>
              <?php endif ?>

            </article>
          <?php endwhile; ?>
        <?php else : ?>
          <p>投稿がありません</p>
        <?php
        endif;
        wp_reset_postdata();
        ?>

      </div>

    </div>
  </section>

  <section id="contact" class="p-contact">
    <div class="p-contact__inner">
      <h2 class="c-section-title">contact</h2>

      <ul class="p-contact-head">
        <li class="navi_01 p-contact-head__item p-contact-head__item-current">入力</li>
        <li id="confirmation" class="navi_02 contact-head__item">
          確認
        </li>
        <li id="send-completely" class="navi_03 contact-head__item">
          送信</li>
      </ul>

      <div id="mw_wp_form_mw-wp-form-459" class="mw_wp_form mw_wp_form_input">

        <?php if ($_SESSION['formStatus'] == 'input') : ?>
          <!-- 入力フォームのHTML -->
          <form class="p-form" method="post" action="" enctype="multipart/form-data">
            <table class="p-contact-body">
              <tbody>

                <tr class="p-input-item">
                  <th class="p-input-item__inner">
                    <p class="p-input-item__inner-title">会社名</p>
                    <p><span class="p-input-item__inner-req">必須</span></p>
                  </th>
                  <td class="p-input-info">
                    <input type="text" name="company-name" class="p-input-info__txt" size="60" value="<?php echo htmlspecialchars(getSavedValue('company-name')); ?>" placeholder="例）株式会社ABC">
                    <?php if (isset($errors['company-name'])) : ?>
                      <p class="p-input-info__error"><?php echo $errors['company-name']; ?></p>
                    <?php endif; ?>
                  </td>
                </tr>

                <tr class="p-input-item">
                  <th class="p-input-item__inner">
                    <p class="p-input-item__inner-title">担当者名</p>
                    <p><span class="p-input-item__inner-req">必須</span></p>
                  </th>
                  <td class="p-input-info">
                    <input type="text" name="pic" class="p-input-info__txt" size="60" value="<?php echo htmlspecialchars(getSavedValue('pic')); ?>" placeholder="例）山田太郎">
                    <?php if (isset($errors['pic'])) : ?>
                      <p class="p-input-info__error"><?php echo $errors['pic']; ?></p>
                    <?php endif; ?>
                  </td>
                </tr>

                <tr class="p-input-item">
                  <th class="p-input-item__inner">
                    <p class="p-input-item__inner-title">担当者名(フリガナ)</p>
                    <p><span class="p-input-item__inner-req">必須</span></p>
                  </th>
                  <td class="p-input-info">
                    <input type="text" name="pic-kana" class="p-input-info__txt" size="60" value="<?php echo htmlspecialchars(getSavedValue('pic-kana')); ?>" placeholder="例）ヤマダタロウ">
                    <?php if (isset($errors['pic-kana'])) : ?>
                      <p class="p-input-info__error"><?php echo $errors['pic-kana']; ?></p>
                    <?php endif; ?>
                  </td>
                </tr>

                <tr class="p-input-item">
                  <th class="p-input-item__inner">
                    <p class="p-input-item__inner-title">メールアドレス</p>
                    <p><span class="p-input-item__inner-req">必須</span></p>
                  </th>
                  <td class="p-input-info">
                    <input type="email" name="email" class="p-input-info__txt" size="60" value="<?php echo htmlspecialchars(getSavedValue('email')); ?>" placeholder="例）mail@example.com">
                    <?php if (isset($errors['email'])) : ?>
                      <p class="p-input-info__error"><?php echo $errors['email']; ?></p>
                    <?php endif ?>
                  </td>
                </tr>

                <tr class="p-input-item">
                  <th class="p-input-item__inner">
                    <p class="p-input-item__inner-title">電話番号</p>
                  </th>
                  <td class="p-input-info">
                    <div class="mwform-tel-field p-input-tell">
                      <input type="text" name="tel-1" class="p-input-tell__number" size="6" maxlength="5" value="<?php echo htmlspecialchars(getSavedValue('tel-1')); ?>">
                      - <input type="text" name="tel-2" class="p-input-tell__number" size="5" maxlength="4" value="<?php echo htmlspecialchars(getSavedValue('tel-2')); ?>">
                      - <input type="text" name="tel-3" class="p-input-tell__number" size="5" maxlength="4" value="<?php echo htmlspecialchars(getSavedValue('tel-3')); ?>">
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
                    <textarea name="msg" class="p-input-info__textarea" cols="30" rows="5"><?php echo htmlspecialchars(getSavedValue('msg')); ?></textarea>
                    <?php if (isset($errors['msg'])) : ?>
                      <p class="p-input-info__error"><?php echo $errors['msg']; ?></p>
                    <?php endif ?>
                  </td>
                </tr>

              </tbody>
            </table>

            <div class="c-submit">
              <input type="submit" name="submitConfirm" value="確認画面へ" class="c-submit__button" onclick="navigateToContact();">
            </div>
          </form>

        <?php elseif ($_SESSION['formStatus'] == 'confirm') : ?>
          <!-- 確認画面のHTML -->
          <form class="p-form" method="post" action="" enctype="multipart/form-data">
            <table class="p-contact-body">
              <tbody>
                <tr class="p-input-item">
                  <th class="p-input-item__inner">
                    <p class="p-input-item__inner-title">会社名</p>
                    <p><span class="p-input-item__inner-req">必須</span></p>
                  </th>
                  <td class="p-input-info">
                    <p class="p-input-info__txt"><?php echo $companyName; ?></p>
                    <input type="hidden" name="company-name" class="p-input-info__txt" size="60" value="<?php echo htmlspecialchars(getSavedValue('company-name')); ?>" placeholder="例）株式会社ABC">
                  </td>
                </tr>
                <tr class="p-input-item">
                  <th class="p-input-item__inner">
                    <p class="p-input-item__inner-title">担当者名</p>
                    <p><span class="p-input-item__inner-req">必須</span></p>
                  </th>
                  <td class="p-input-info">
                    <p class="p-input-info__txt"><?php echo $pic; ?></p>
                    <input type="hidden" name="pic" class="p-input-info__txt" size="60" value="<?php echo htmlspecialchars(getSavedValue('pic')); ?>" placeholder="例）山田太郎">
                  </td>
                </tr>
                <tr class="p-input-item">
                  <th class="p-input-item__inner">
                    <p class="p-input-item__inner-title">担当者名(フリガナ)</p>
                    <p><span class="p-input-item__inner-req">必須</span></p>
                  </th>
                  <td class="p-input-info">
                    <p class="p-input-info__txt"><?php echo $picKana; ?></p>
                    <input type="hidden" name="pic-kana" class="p-input-info__txt" size="60" value="<?php echo htmlspecialchars(getSavedValue('pic-kana')); ?>" placeholder="例）ヤマダタロウ">
                  </td>
                </tr>
                <tr class="p-input-item">
                  <th class="p-input-item__inner">
                    <p class="p-input-item__inner-title">メールアドレス</p>
                    <p><span class="p-input-item__inner-req">必須</span></p>
                  </th>
                  <td class="p-input-info">
                    <p class="p-input-info__txt"><?php echo $email; ?></p>
                    <input type="hidden" name="email" class="p-input-info__txt" size="60" value="<?php echo htmlspecialchars(getSavedValue('email')); ?>" placeholder="例）mail@example.com">
                  </td>
                </tr>
                <tr class="p-input-item">
                  <th class="p-input-item__inner">
                    <p class="p-input-item__inner-title">電話番号</p>
                  </th>
                  <td class="p-input-info">
                    <div class="mwform-tel-field p-input-tell">
                      <span class="p-input-info__txt"><?php echo $tel1; ?>- </span>
                      <span class="p-input-info__txt"><?php echo $tel2; ?>- </span>
                      <span class="p-input-info__txt"><?php echo $tel3; ?></span>

                      <input type="hidden" name="tel-1" class="p-input-tell__number" size="6" maxlength="5" value="<?php echo htmlspecialchars(getSavedValue('tel-1')); ?>">
                      <input type="hidden" name="tel-2" class="p-input-tell__number" size="5" maxlength="4" value="<?php echo htmlspecialchars(getSavedValue('tel-2')); ?>">
                      <input type="hidden" name="tel-3" class="p-input-tell__number" size="5" maxlength="4" value="<?php echo htmlspecialchars(getSavedValue('tel-3')); ?>">

                    </div>
                  </td>
                </tr>
                <tr class="p-input-item">
                  <th class="p-input-item__inner">
                    <p class="p-input-item__inner-title">お問い合わせ内容</p>
                    <p><span class="p-input-item__inner-req">必須</span></p>
                  </th>
                  <td class="p-input-info">
                    <p><?php echo $msg; ?></p>
                    <input type="hidden" value="<?php echo htmlspecialchars(getSavedValue('msg')); ?>" name="msg">
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="c-submit">
              <button type="submit" name="submitBack" value="back" class="c-submit__button">戻る</button>
              <br>
              <input type="submit" name="submitFinal" value="送信する" class="c-submit__button">
            </div>

          </form>



        <?php elseif ($_SESSION['formStatus'] == 'complete') : ?>
          <!-- 送信完了メッセージのHTML -->
          <p>フォームが送信されました。</p>
          <a href="/">TOPへ戻る</a>

        <?php endif; ?>


      </div>
    </div>
  </section>


</main>

<?php get_footer(); ?>

<script>
  function navigateToContact() {
    // `contact`セクションにスクロールする
    document.getElementById('contact').scrollIntoView();
  }
</script>