<?php

session_start();
$errorMessage = '';


// 'formStatus'が設定されていない場合に初期化
if (!isset($_SESSION['formStatus'])) {
  $_SESSION['formStatus'] = 'input'; // デフォルトの状態
}

// ページロード時にステータスが 'complete' ならば 'input' にリセット
if ($_SESSION['formStatus'] == 'complete') {
  $_SESSION['formStatus'] = 'input';
}

include_once 'form/form-validation.php'; // バリデーションファイルの読み込み

// フォームデータをセッションに保存
function saveFormData()
{
  if (!empty($_POST)) {
    // $_SESSION['formData'] を配列として初期化
    if (!isset($_SESSION['formData']) || !is_array($_SESSION['formData'])) {
      $_SESSION['formData'] = array();
    }
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
    // 戻るボタンを押したら入力画面に戻る    
    elseif (isset($_POST["submitBack"])) {
      $_SESSION['formStatus'] = 'input';
    }
  }
}

$recaptcha_response = $_POST['recaptcha_response'];
$recaptcha_secret = '6LctMSUpAAAAAGMYKrabpEnNVxFkkf2fvPHe9yMI';

$recaptch_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_params = [
  'secret' => $recaptcha_secret,
  'response' => $recaptcha_response,
];
$recaptcha = json_decode(file_get_contents($recaptch_url . '?' . http_build_query($recaptcha_params)));

if ($recaptcha->score >= 0.5) {
  // ここに成功時の処理を書く
  // $_SESSION['formStatus'] = 'confirm';
} else {
  // ここに失敗時の処理を書く　基本的には何もしなくて良い
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



if ($_SERVER["REQUEST_METHOD"] == "POST" && $_SESSION['formStatus'] == 'confirm') {
  if (isset($_POST["submitFinal"])) {

    //お客様宛自動返信メール
    $toCustomer = $_SESSION['formData']['email']; // 送信先のメールアドレス
    $subjectCustomer = 'ivorytowerへお問い合わせありがとうございます。';
    $messageCustomer = "会社名: " . $_SESSION['formData']['company-name'] . "\n"
      . "担当者名: " . $_SESSION['formData']['pic'] . "\n"
      . "担当者名カナ: " . $_SESSION['formData']['pic-kana'] . "\n"
      . "メールアドレス: " . $_SESSION['formData']['email'] . "\n"
      . "電話番号: " . $_SESSION['formData']['tel-1'] . "-" . $_SESSION['formData']['tel-2'] . "-" . $_SESSION['formData']['tel-3'] . "\n"
      . "メッセージ: " . $_SESSION['formData']['msg'];
    $headersCustomer = 'From: info@ivorytowerlab.jp'; // 送信元のメールアドレス

    $sentToCustomer = wp_mail($toCustomer, $subjectCustomer, $messageCustomer, $headersCustomer);


    // 管理者宛自動返信メール
    $toAdmin = 'info@ivorytowerlab.jp'; // 送信先のメールアドレス
    $subjectAdmin = 'ivorytowerへお問い合わせが届いています。';
    $messageAdmin = "会社名: " . $_SESSION['formData']['company-name'] . "\n"
      . "担当者名: " . $_SESSION['formData']['pic'] . "\n"
      . "担当者名カナ: " . $_SESSION['formData']['pic-kana'] . "\n"
      . "メールアドレス: " . $_SESSION['formData']['email'] . "\n"
      . "電話番号: " . $_SESSION['formData']['tel-1'] . "-" . $_SESSION['formData']['tel-2'] . "-" . $_SESSION['formData']['tel-3'] . "\n"
      . "メッセージ: " . $_SESSION['formData']['msg'];
    $headersAdmin = 'From: ' . $_SESSION['formData']['email']; // 送信元のメールアドレス
    // BCCアドレスの追加
    $headersAdmin .= "\r\nBcc: gu.jp0604@gmail.com";

    $sentToAdmin = wp_mail($toAdmin, $subjectAdmin, $messageAdmin, $headersAdmin);

    // 送信結果の確認
    if (!$sentToCustomer || !$sentToAdmin) {
      // 送信に失敗した場合の処理
      $errorMessage =  '送信に失敗しました。';
    } else {
      $_SESSION['formStatus'] = 'complete';
      // セッションデータをクリア
      unset($_SESSION['formData']);
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
    <div class="p-works_bg">
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

    </div>
  </section>

  <section id="contact" class="p-contact">
    <div class="p-contact__inner">
      <h2 class="c-section-title">contact</h2>

      <ul class="p-contact-head">
        <li class="navi_01 p-contact-head__item 
        <?php if ($_SESSION['formStatus'] == 'input') : ?>
        p-contact-head__item-current
        <?php endif ?>
        ">入力</li>
        <li id="confirmation" class="navi_02 contact-head__item
        <?php if ($_SESSION['formStatus'] == 'confirm') : ?>
        p-contact-head__item-current
        <?php endif ?>
        ">
          確認
        </li>
        <li id="send-completely" class="navi_03 contact-head__item
        <?php if ($_SESSION['formStatus'] == 'complete') : ?>
        p-contact-head__item-current
        <?php endif ?>
        ">
          送信</li>
      </ul>

      <?php if ($_SESSION['formStatus'] == 'input') : ?>
        <!-- 入力フォームのHTML -->
        <?php include 'form/form-input.php'; ?>

      <?php elseif ($_SESSION['formStatus'] == 'confirm') : ?>
        <!-- 確認画面のHTML -->
        <?php include 'form/form-confirm.php'; ?>

      <?php elseif ($_SESSION['formStatus'] == 'complete') : ?>
        <!-- 送信完了メッセージのHTML -->
        <?php include 'form/form-complete.php'; ?>

      <?php endif; ?>


    </div>
  </section>


</main>

<?php get_footer(); ?>