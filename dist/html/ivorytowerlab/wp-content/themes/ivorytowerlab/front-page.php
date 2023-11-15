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

        <img class="p-about-me-contents__img" src="/assets/img/common/face.png" alt="ivorytower_lab">
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
                <li class="p-about-me-career__list"> <?php  echo esc_html( $skill ); ?></li>
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
              <a class="p-works_item__link" href="<?php echo SCF::get('url')?>">
              <h3 class="p-works-item-txt__title"><?php the_title(); ?></h3>
                <?php if(has_post_thumbnail()): ?>
                <img class="p-works_item__link_img" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                <?php endif ?>
                <div class="p-works-item-txt">
                <p class="p-works-item-txt__heading">[制作時期]</p>
                    <p><?php echo SCF::get('year'); ?>年</p>
                  <p class="p-works-item-txt__heading">[使用技術]</p>
                    <?php
                    $technologies = SCF::get( 'technology' ); ?>
                        <ul class="p-works-item-txt__list">
                            <?php foreach ( $technologies as $technology ) : ?>
                                <li class="p-works-item-txt__list_item"><?php echo esc_html( $technology ); ?></li>
                            <?php endforeach; ?>
                        </ul>

                      <p class="p-works-item-txt__heading">[コメント]</p>
                      <p><?php echo SCF::get('comment'); ?></p>

                      <?php if (SCF::get('basic_id') !== "") :?>
                        <p class="p-works-item-txt__heading">[Basic認証]</p>
                      <p>ID : <?php echo SCF::get('basic_id'); ?>/ PW :  <?php echo SCF::get('basic_pw'); ?></p>
                      <?php endif ?>
              </a>
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

        <form class="p-form" method="post" action="" enctype="multipart/form-data">
          <table class="p-contact-body">
            <tbody>
              <tr class="p-input-item">
                <th class="p-input-item__inner">
                  <p class="p-input-item__inner-title">会社名</p>
                  <p><span class="p-input-item__inner-req">必須</span></p>
                </th>
                <td class="p-input-info">
                  <input type="text" name="company-name" class="p-input-info__txt" size="60" value="" placeholder="例）株式会社ABC">
                </td>
              </tr>
              <tr class="p-input-item">
                <th class="p-input-item__inner">
                  <p class="p-input-item__inner-title">担当者名</p>
                  <p><span class="p-input-item__inner-req">必須</span></p>
                </th>
                <td class="p-input-info">
                  <input type="text" name="pic" class="p-input-info__txt" size="60" value="" placeholder="例）山田太郎">
                </td>
              </tr>
              <tr class="p-input-item">
                <th class="p-input-item__inner">
                  <p class="p-input-item__inner-title">担当者名(フリガナ)</p>
                  <p><span class="p-input-item__inner-req">必須</span></p>
                </th>
                <td class="p-input-info">
                  <input type="text" name="pic-kana" class="p-input-info__txt" size="60" value="" placeholder="例）ヤマダタロウ">
                </td>
              </tr>
              <tr class="p-input-item">
                <th class="p-input-item__inner">
                  <p class="p-input-item__inner-title">メールアドレス</p>
                  <p><span class="p-input-item__inner-req">必須</span></p>
                </th>
                <td class="p-input-info">

                  <input type="email" name="email" class="p-input-info__txt" size="60" value="" placeholder="例）mail@example.com">
                </td>
              </tr>
              <tr class="p-input-item">
                <th class="p-input-item__inner">
                  <p class="p-input-item__inner-title">電話番号</p>
                </th>
                <td class="p-input-info">
                  <div class="mwform-tel-field p-input-tell">
                    <input type="text" name="tell[data][0]" class="p-input-tell__number" size="6" maxlength="5" value="">
                    - <input type="text" name="tell[data][1]" class="p-input-tell__number" size="5" maxlength="4" value="">
                    - <input type="text" name="tell[data][2]" class="p-input-tell__number" size="5" maxlength="4" value="">
                  </div>

                  <input type="hidden" name="tell[separator]" value="-">
                </td>
              </tr>
              <tr class="p-input-item">
                <th class="p-input-item__inner">
                  <p class="p-input-item__inner-title">お問い合わせ内容</p>
                  <p><span class="p-input-item__inner-req">必須</span></p>
                </th>
                <td class="p-input-info">
                  <textarea name="msg" class="p-input-info__textarea" cols="30" rows="5"></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="c-submit">
            <input type="submit" name="submitConfirm" value="確認画面へ" class="c-submit__button">
          </div>

          <p>
            <input type="hidden" name="recaptcha-v3" value="03AFcWeA5T4xeaVAKaj-XLi5bvdjIuisr4OfiWZqw5Ln-KlshIWv7OO462IRJ6C_KyEYOMRfaENG5UQg1eO9t-sLOshD1Nrxb1Rl8szG8OdXVnnVUc1a0q1VrochfSET8dMfgRLlEioOc30paGy3SFJHg50FgBMdCPqfGT-J0gCpsJsLdyqQtlag0XxEmHEpiejcZaaPgn_PgFJNb-h0xEOnM3MovWvjhnAXBK38QuxPQwOR_t9bXNvVicaoaExoLybMR3vZoc8wTLwShxsZo_sGPTjWN86olUoaiGIZGGdyfVq9hk2uNTp8BJncw5SyXJVGznbrQaYyQlPjW0eTxHE5sZ6eb08_R0Q9Eguhi3tfa5DFWmqLupCbRgmWaydMcdRKd0fFCteb4AvwltLDchu5E-aHhLajD2RKnnkEjOFRhBmxat3W2zQPZFVfX17bvgBEReqlUXtTS1G5DJXqkG_rB2cU7s1ZZZg5f2jPuKGvmn9Dr_U0T-Uj4EQzTL2Wf2-i5Y51i8TD_ta4b0HV94592chK8XTrJK-69GqJ0N8uKuU94fDy19g6U">
            <br>
          </p>

          <input type="hidden" id="mw_wp_form_token" name="mw_wp_form_token" value="a39beba857"><input type="hidden" name="_wp_http_referer" value="/"><input type="hidden" name="mw-wp-form-form-id" value="459"><input type="hidden" name="mw-wp-form-form-verify-token" value="839291575a8ca507358b8a6aae3815347bdcfb83">

        </form>
        <!-- end .mw_wp_form -->
      </div>
    </div>
  </section>


</main>

<?php get_footer(); ?>