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
      //recaptchaのシークレットキーは開発環境と、本番環境では異なります。
      $recaptcha_secret = getenv('RECAPTCHA_SECRET_KEY');
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
        $headers = "From:info-ivory-tower@ivorytower-lab.ivory.ne.jp"; // 送信元のメールアドレス

        // 管理者への自動返信メールの内容を準備
        $to_admin = 'info-ivory-tower@ivorytower-lab.ivory.ne.jp'; // 管理者のメールアドレス
        $subject_admin = "Ivory Tower Laboratoryへお問い合わせがありました。"; // 件名
        $message_admin = "会社名: " . $_POST['company-name'] . "\n"
          . "担当者名: " . $_POST['pic'] . "\n"
          . "担当者名(カナ): " . $_POST['pic-2'] . "\n"
          . "メールアドレス: " . $_POST['email'] . "\n"
          . "電話番号:" . $telNumber . "\n"
          . "お問い合わせ内容: " . $_POST['msg'] . "\n"; // メッセージ本文
        $headers_admin = "From:info-ivory-tower@ivorytower-lab.ivory.ne.jp"; // 送信元のメールアドレス

        // 送信者へのメール送信
        $sendErrorUser = mail($to, $subject, $message, $headers);

        // 管理者へのメール送信
        $sendErrorAdmin = mail($to_admin, $subject_admin, $message_admin, $headers_admin);

        // エラーログと画面表示
        if (!$sendErrorUser || !$sendErrorAdmin) {
          error_log("Send Error: ユーザーまたは管理者へのメール送信に失敗しました。");
          if (!$sendErrorUser) {
            error_log("User mail send failed: " . print_r($headers, true));
          }
          if (!$sendErrorAdmin) {
            error_log("Admin mail send failed: " . print_r($headers_admin, true));
          }
          echo "<p>メール送信に失敗しました。エラー内容を確認してください。</p>";
        } else {
          // 送信完了後、ステータスを'complete'に設定
          $_SESSION['formStatus'] = 'complete';
          $_SESSION['completed'] = true; // 送信完了のマーカーとして設定
        }
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
                    <?php echo nl2br(SCF::get('career')); ?>
                  </p>
                <?php endwhile; ?>
              <?php else : ?>
                <p>投稿がありません</p>
              <?php endif;
            wp_reset_postdata();
              ?>
                </div>
              </div>

              <div class="p-about-me-txt__wrap">
                <span class="p-about-me-txt__strong">スキル</span>
                <p class="p-about-me-comment">
                  以下の実務経験年数を自動で更新させるために、PHPでリストを連想配列にまとめ、値に開始年数を指定。<br>
                  foreachで1件ずつ出力する際に現在の年と、開始年数を引いた値（実働年数）を動的に取得しています。<br>
                  <span style="color:#ff4901">赤色太字の数字部分は毎年自動で更新されます。</span><br>
                  毎年数を更新していくのは忘れがち。。。<br>
                  プログラミングを使えば細かな作業が自動化できて便利!!
                </p>
                <ul class="p-about-me-career">
                  <?php

                  $skills = [
                    'HTML/css/Sass' => 2020,
                    'Gitを使った共同開発' => 2021,
                    'Wordpressオリジナルテーマ制作' => 2021,
                    'Gulpを使ったサイト制作' => 2021,
                    'PHP' => 2021,
                    'JavaScript' => 2021,
                    'Docker' => 2021,
                  ];
                  $current_year = date("Y");; ?>
                  <?php foreach ($skills as $skill => $start_year) : ?>
                    <?php $experience_years = $current_year - $start_year; ?>
                    <li class="p-about-me-career__list">・<?php echo $skill ?> （実務経験 <span><?php echo $experience_years ?></span>年以上）</li>
                  <?php endforeach ?>
                  <!-- PHP Laravelを使ったwebアプリ制作は別途追加 -->
                  <li class="p-about-me-career__list">・PHP Laravelを使ったwebアプリ制作（実務経験 1件　ユーザー登録更新、削除機能の実装を担当）</li>
                </ul>
              </div>
            </div>

      </div>
    </div>
  </section>

  <section id="works" class="p-works">
    <div class="p-works_bg">
      <div class="p-works__inner">
        <h2 class="c-section-title">Works</h2>
        <div class="p-works-contents">
          <h3 class="p-works-contents__ttl">webアプリ</h3>
          <div class="p-works-contents__inner">
            <?php
            $args = array(
              'post_type' => 'works',
              'posts_per_page' => -1,
              'tax_query' => array(
                array(
                  'taxonomy' => 'web_type', // カスタムタクソノミー
                  'field' => 'slug',        // タームをスラッグで指定
                  'terms' => 'web_app',    // 表示したいターム
                ),
              ),
            );
            $works_query = new WP_Query($args);

            if ($works_query->have_posts()) :
              while ($works_query->have_posts()) : $works_query->the_post();
            ?>
                <article class="p-works-item webapp">
                  <div class="webapp-img">
                    <h3 class="p-works-item-txt__title"><?php the_title(); ?></h3>
                    <ul class="slick01">
                    <?php
                      // 繰り返しフィールドのデータを取得
                      $image_ids = SCF::get('slideImg');
                      if (!empty($image_ids)) { // 画像データが空でない場合
                          foreach ($image_ids as $image_id) {
                              // 画像URLを取得
                              $image_url = wp_get_attachment_url($image_id);
                              if ($image_url) { // 画像URLが取得できた場合のみ表示
                                  ?>
                                  <li>
                                      <img src="<?php echo esc_url($image_url); ?>" alt="">
                                  </li>
                                  <?php
                              } else {
                                  // URLが取得できない場合の処理（必要なら追加）
                                  echo '<li>画像が見つかりません。</li>';
                              }
                          }
                      } else {
                          // 画像がない場合の処理（必要なら追加）
                          echo '<li>画像が設定されていません。</li>';
                      }
                      ?>
                    </ul>

                    <div class="webapp-txt bottom">
                      <p class="p-works-item-txt__heading">[サイトURL]</p>
                      <a href="<?php
                      echo SCF::get('url') ?>">
                        <p><?php echo SCF::get('url') ?></p>
                      </a>
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
                    </div>
                  </div>
                  <div class="webapp-txt">
                    <p class="p-works-item-txt__heading">[コメント]</p>
                    <p><?php echo nl2br(SCF::get('comment')); ?></p>

                    <?php if (SCF::get('basic_id') !== "") : ?>
                      <p class="p-works-item-txt__heading">[Basic認証]</p>
                      <p>ID : <?php echo SCF::get('basic_id'); ?>/ PW : <?php echo SCF::get('basic_pw'); ?></p>
                    <?php endif ?>
                  </div>
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


        <div class="p-works-contents">
          <h3 class="p-works-contents__ttl">webサイト</h3>

          <div class="p-works-contents__inner">
            <?php
            $args = array(
              'post_type' => 'works',
              'posts_per_page' => -1,
              'tax_query' => array(
                array(
                  'taxonomy' => 'web_type', // カスタムタクソノミー
                  'field' => 'slug',        // タームをスラッグで指定
                  'terms' => 'web_site',    // 表示したいターム
                ),
              ),
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
                  <p class="p-works-item-txt__heading">[サイトURL]</p>
                  <p> <a href="<?php
                      echo SCF::get('url') ?>">
                      <?php echo SCF::get('url'); ?>
                    </a>
                  </p>
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
                  <p><?php echo nl2br(SCF::get('comment')); ?></p>

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