<?php

session_start();
include_once('form/form-validation.php');
$sendError = ''; //初期化
$reCAPTCHAError = ''; //初期化
$recap = ''; //初期化
$senderror = ''; //初期化


// ページの最初で、送信完了後のリロードをチェック
if (isset($_SESSION['completed']) && $_SESSION['completed']) {
  $_SESSION['formStatus'] = 'input';
  unset($_SESSION['completed']); // または $_SESSION['completed'] = false;
  unset($_SESSION['formData']);
}

//ページにアクセスした際は $_SESSION['formStatus'] = 'input'に設定
if (!isset($_SESSION['formStatus'])) {
  $_SESSION['formStatus'] = 'input';
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $post = sanitize($_POST);
  $errors = validateFormData($post); // フォームデータのバリデーション
  //$errors(バリデーションエラー)がエラーがあれば入力画面に留まる
  if (!empty($errors)) {
    $_SESSION['formData'] =  $post = sanitize($_POST); // エラーがある場合、フォームデータをセッションに保存
    $_SESSION['formStatus'] = 'input';
  } else {


    $myform_nonce = $_POST['myform_nonce'];

    //「確認画面」ボタンがクリックされた時、nonceのチェックをして確認画面に遷移
    if (isset($_POST['submitConfirm']) && wp_verify_nonce($myform_nonce, 'my-form') && empty($errors)) {
      //recaptchaの情報をセット
      $recaptcha_response = $_POST['recaptcha_response'];
      //recaptchaのサイトキー、シークレットキーは開発環境と、本番環境では異なります。
      $recaptcha_secret = '6LctMSUpAAAAAGMYKrabpEnNVxFkkf2fvPHe9yMI';

      $recaptch_url = 'https://www.google.com/recaptcha/api/siteverify';
      $recaptcha_params = [
        'secret' => $recaptcha_secret,
        'response' => $recaptcha_response,
      ];
      $recaptcha = json_decode(file_get_contents($recaptch_url . '?' . http_build_query($recaptcha_params)));
      if ($recaptcha->success && $recaptcha->score >= 0.5) {

        $_SESSION['formStatus'] = 'confirm';
        // ここでフォームの各入力値をセッション変数に保存
        $_SESSION['formData'] = $_POST; // 全てのフォームデータを保存
        $recap  = 'success';
      } else {
        $recap  = 'error';
      }
    }


    if (isset($_POST['submitBack'])) {
      $_SESSION['formStatus'] = 'input';
    }

    //「送信する」ボタンがクリックされた時
    if (isset($_POST['submitFinal'])) {

      //確認画面で再度バリデーションチェック
      if (empty($errors)) {
        //バリデーションエラーがなければ、送信完了画面を表示してメール送信
        //メール本文構築
        // 電話番号の構築
        $telNumber = '';
        if ($_POST['tel-1'] == '' && $_POST['tel-2'] == '' && $_POST['tel-3'] == '') {
          $telNumber = "未入力";
        } else {
          $telNumber = $_POST['tel-1'] . '-' . $_POST['tel-2'] . '-' . $_POST['tel-3'];
        }

        // 問い合わせ者への自動返信メールの内容を準備
        $to = $_POST['email']; // 宛先のメールアドレス
        $subject = "お問い合わせありがとうございます。 Ivory Tower Laboratory"; // 件名
        $message = "会社名: " . $_POST['company-name'] . "\n"
          . "担当者名: " . $_POST['pic'] . "\n"
          . "メールアドレス: " . $_POST['email'] . "\n"
          . "電話番号:" . $telNumber . "\n"
          . "お問い合わせ内容: " . $_POST['msg'] . "\n" // メッセージ本文
          . '担当者より1-3営業日以内にご連絡いたします。' . "\n";
        $headers = "From: info@gu-jp.sakura.ne.jp"; // 送信元のメールアドレス


        //管理者への自動返信メールの内容を準備
        // 問い合わせ者への自動返信メールの内容を準備
        $to = 'info@gu-jp.sakura.ne.jp'; // 宛先のメールアドレス
        $subject = "Ivory Tower Laboratoryへお問い合わせがありました。"; // 件名
        $message = "会社名: " . $_POST['company-name'] . "\n"
          . "担当者名: " . $_POST['pic'] . "\n"
          . "担当者名(カナ): " . $_POST['pic-2'] . "\n"
          . "メールアドレス: " . $_POST['email'] . "\n"
          . "電話番号:" . $telNumber . "\n"
          . "お問い合わせ内容: " . $_POST['msg'] . "\n"; // メッセージ本文
        $headers = "From:" . $_POST['email']; // 送信元のメールアドレス

        $sendError = sendMail($to, $subject, $message, $headers);
        // 送信完了後、ステータスを'complete'に設定
        $_SESSION['formStatus'] = 'complete';
        $_SESSION['completed'] = true; // 送信完了のマーカーとして設定
      }
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
        <?php include("form/form-input.php"); ?>

      <?php elseif ($_SESSION['formStatus'] == 'confirm') : ?>
        <!-- 確認画面のHTML -->
        <?php include("form/form-confirm.php"); ?>

      <?php elseif ($_SESSION['formStatus'] == 'complete') : ?>
        <!-- 送信完了メッセージのHTML -->
        <?php include("form/form-complete.php"); ?>

      <?php endif; ?>


    </div>
  </section>


</main>

<?php get_footer(); ?>