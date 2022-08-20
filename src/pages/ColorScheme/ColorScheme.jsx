import React from 'react'

function ColorScheme() {
    return (
        <div class="main-content">
            <div class="row">
                <div class="col-12">
                    { /* Page title */}
                    <div class="my-5">
                        <h1>Theme Color Scheme</h1>
                        <p class="lead">Making site color scheme according to your company identity is essential to all businesses. So here you will see how we have made this very important need of yours almost effortless.</p>
                        <hr class="my-5" />
                    </div>
                    { /* Page content START */}


                    { /* #1 Using SCSS content */}
                    <p>We understand your need of changing theme color scheme at ease so We've got you covered. Whether you want to work with SCSS or CSS, both methods are described below. Please note we highly recommend to go with SCSS method.</p>
                    <h3 class="mt-5">#1 Using SCSS</h3>
                    <p>After completing gulp and sass setup, please open <code>_user-variables.scss</code> file located at <code>template/assets/scss</code>. You will find commented code in the same so please just uncomment it and save the file while gulp is running. If you are new to gulp, please go through Gulp section <a href="gulp.html">here</a>. Follow the steps and you will be able to build your site at very ease.</p>

                    <div class="position-relative">
                        <pre id="copy-1" class="my-3 h-500 language-javascript"><code class="  language-javascript">

                            $primary<span class="token punctuation">:</span>     red<span class="token punctuation">;</span>

                            <span class="token comment" spellcheck="true">// theme colors map</span>
                            $theme<span class="token operator">-</span>colors<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            $theme<span class="token operator">-</span>colors<span class="token punctuation">:</span> map<span class="token operator">-</span><span class="token function">merge</span><span class="token punctuation">(</span>
                            <span class="token punctuation">(</span>
                            <span class="token string">"primary"</span><span class="token punctuation">:</span>    $primary<span class="token punctuation">,</span>
                            <span class="token string">"white"</span><span class="token punctuation">:</span>      $white<span class="token punctuation">,</span>
                            <span class="token string">"secondary"</span><span class="token punctuation">:</span>  $secondary<span class="token punctuation">,</span>
                            <span class="token string">"success"</span><span class="token punctuation">:</span>    $success<span class="token punctuation">,</span>
                            <span class="token string">"info"</span><span class="token punctuation">:</span>       $info<span class="token punctuation">,</span>
                            <span class="token string">"warning"</span><span class="token punctuation">:</span>    $warning<span class="token punctuation">,</span>
                            <span class="token string">"danger"</span><span class="token punctuation">:</span>     $danger<span class="token punctuation">,</span>
                            <span class="token string">"light"</span><span class="token punctuation">:</span>      $light<span class="token punctuation">,</span>
                            <span class="token string">"dark"</span><span class="token punctuation">:</span>       $dark<span class="token punctuation">,</span>
                            <span class="token string">"orange"</span><span class="token punctuation">:</span>     $orange<span class="token punctuation">,</span>
                            <span class="token string">"purple"</span><span class="token punctuation">:</span>     $purple<span class="token punctuation">,</span>
                            <span class="token string">"blue"</span><span class="token punctuation">:</span>       $blue
                            <span class="token punctuation">)</span><span class="token punctuation">,</span>
                            $theme<span class="token operator">-</span>colors
                            <span class="token punctuation">)</span><span class="token punctuation">;</span>

                            $theme<span class="token operator">-</span>colors<span class="token operator">-</span>rgb<span class="token punctuation">:</span> map<span class="token operator">-</span><span class="token function">loop</span><span class="token punctuation">(</span>$theme<span class="token operator">-</span>colors<span class="token punctuation">,</span> to<span class="token operator">-</span>rgb<span class="token punctuation">,</span> <span class="token string">"$value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                            $soft<span class="token operator">-</span>alpha<span class="token punctuation">:</span>          <span class="token punctuation">.</span><span class="token number">1</span><span class="token punctuation">;</span>

                            $link<span class="token operator">-</span>color<span class="token punctuation">:</span>                        $primary<span class="token punctuation">;</span>
                            $link<span class="token operator">-</span>hover<span class="token operator">-</span>color<span class="token punctuation">:</span>                  shift<span class="token operator">-</span><span class="token function">color</span><span class="token punctuation">(</span>$link<span class="token operator">-</span>color<span class="token punctuation">,</span> $link<span class="token operator">-</span>shade<span class="token operator">-</span>percentage<span class="token punctuation">)</span><span class="token punctuation">;</span>

                            $navbar<span class="token operator">-</span>light<span class="token operator">-</span>hover<span class="token operator">-</span>color<span class="token punctuation">:</span>          $primary<span class="token punctuation">;</span>
                            $navbar<span class="token operator">-</span>light<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">:</span>         $primary<span class="token punctuation">;</span>
                            $navbar<span class="token operator">-</span>dark<span class="token operator">-</span>hover<span class="token operator">-</span>color<span class="token punctuation">:</span>           $primary <span class="token operator">!</span>important<span class="token punctuation">;</span>
                            $navbar<span class="token operator">-</span>dark<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">:</span>          $primary <span class="token operator">!</span>important<span class="token punctuation">;</span>

                            $dropdown<span class="token operator">-</span>link<span class="token operator">-</span>hover<span class="token operator">-</span>color<span class="token punctuation">:</span>         $primary <span class="token operator">!</span>important<span class="token punctuation">;</span>
                            $dropdown<span class="token operator">-</span>link<span class="token operator">-</span>hover<span class="token operator">-</span>bg<span class="token punctuation">:</span>            <span class="token function">rgba</span><span class="token punctuation">(</span>$primary<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!</span>important<span class="token punctuation">;</span>
                            $dropdown<span class="token operator">-</span>link<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">:</span>           $dropdown<span class="token operator">-</span>link<span class="token operator">-</span>hover<span class="token operator">-</span>bg<span class="token punctuation">;</span>
                            $dropdown<span class="token operator">-</span>link<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">:</span>        $primary<span class="token punctuation">;</span>
                            $dropdown<span class="token operator">-</span>dark<span class="token operator">-</span>link<span class="token operator">-</span>hover<span class="token operator">-</span>bg<span class="token punctuation">:</span>       $dropdown<span class="token operator">-</span>link<span class="token operator">-</span>hover<span class="token operator">-</span>bg<span class="token punctuation">;</span>
                            $dropdown<span class="token operator">-</span>dark<span class="token operator">-</span>link<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">:</span>   $dropdown<span class="token operator">-</span>link<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">;</span>
                            $dropdown<span class="token operator">-</span>dark<span class="token operator">-</span>link<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">:</span>      $dropdown<span class="token operator">-</span>link<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">;</span>

                            $progress<span class="token operator">-</span>bar<span class="token operator">-</span>bg<span class="token punctuation">:</span>                   $primary<span class="token punctuation">;</span>

                            $component<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">:</span>               $primary<span class="token punctuation">;</span>

                            $pagination<span class="token operator">-</span>hover<span class="token operator">-</span>color<span class="token punctuation">:</span>            $white<span class="token punctuation">;</span>
                            $pagination<span class="token operator">-</span>hover<span class="token operator">-</span>bg<span class="token punctuation">:</span>               $primary<span class="token punctuation">;</span>
                            $pagination<span class="token operator">-</span>hover<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">:</span>     $primary<span class="token punctuation">;</span>
                            $pagination<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">:</span>           $component<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">;</span>
                            $pagination<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">:</span>              $component<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">;</span>
                            $pagination<span class="token operator">-</span>active<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">:</span>    $pagination<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">;</span>

                            $list<span class="token operator">-</span>group<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">:</span>           $component<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">;</span>
                            $list<span class="token operator">-</span>group<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">:</span>              $component<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">;</span>
                            $list<span class="token operator">-</span>group<span class="token operator">-</span>active<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">:</span>    $list<span class="token operator">-</span>group<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">;</span>

                            $nav<span class="token operator">-</span>pills<span class="token operator">-</span>link<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">:</span>       $component<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">;</span>
                            $nav<span class="token operator">-</span>pills<span class="token operator">-</span>link<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">:</span>          $component<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">;</span>

                            $input<span class="token operator">-</span>focus<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">:</span>          $primary<span class="token punctuation">;</span>
                            $form<span class="token operator">-</span>check<span class="token operator">-</span>input<span class="token operator">-</span>focus<span class="token operator">-</span>border<span class="token punctuation">:</span>     $input<span class="token operator">-</span>focus<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">;</span>
                            $form<span class="token operator">-</span><span class="token keyword">switch</span><span class="token operator">-</span>focus<span class="token operator">-</span>color<span class="token punctuation">:</span>           $input<span class="token operator">-</span>focus<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">;</span>
                            $form<span class="token operator">-</span>select<span class="token operator">-</span>focus<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">:</span>    $input<span class="token operator">-</span>focus<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">;</span>

                            $form<span class="token operator">-</span>check<span class="token operator">-</span>input<span class="token operator">-</span>checked<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token punctuation">:</span>       $component<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">;</span>
                            $form<span class="token operator">-</span>check<span class="token operator">-</span>input<span class="token operator">-</span>checked<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">:</span>   $form<span class="token operator">-</span>check<span class="token operator">-</span>input<span class="token operator">-</span>checked<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token punctuation">;</span>
                            $form<span class="token operator">-</span>check<span class="token operator">-</span>input<span class="token operator">-</span>indeterminate<span class="token operator">-</span>color<span class="token punctuation">:</span>          $component<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">;</span>
                            $form<span class="token operator">-</span>check<span class="token operator">-</span>input<span class="token operator">-</span>indeterminate<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token punctuation">:</span>       $component<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">;</span>
                            $form<span class="token operator">-</span>check<span class="token operator">-</span>input<span class="token operator">-</span>indeterminate<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">:</span>   $form<span class="token operator">-</span>check<span class="token operator">-</span>input<span class="token operator">-</span>indeterminate<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token punctuation">;</span>

                            $form<span class="token operator">-</span><span class="token keyword">switch</span><span class="token operator">-</span>focus<span class="token operator">-</span>color<span class="token punctuation">:</span>     $input<span class="token operator">-</span>focus<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">;</span>
                            $form<span class="token operator">-</span><span class="token keyword">switch</span><span class="token operator">-</span>focus<span class="token operator">-</span>bg<span class="token operator">-</span>image<span class="token punctuation">:</span>  <span class="token function">url</span><span class="token punctuation"></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                            $btn<span class="token operator">-</span>link<span class="token operator">-</span>color<span class="token punctuation">:</span>              $link<span class="token operator">-</span>color<span class="token punctuation">;</span>
                            $btn<span class="token operator">-</span>link<span class="token operator">-</span>hover<span class="token operator">-</span>color<span class="token punctuation">:</span>        $link<span class="token operator">-</span>hover<span class="token operator">-</span>color<span class="token punctuation">;</span>

                            $form<span class="token operator">-</span>range<span class="token operator">-</span>thumb<span class="token operator">-</span>bg<span class="token punctuation">:</span>         $component<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">;</span>
                            $form<span class="token operator">-</span>range<span class="token operator">-</span>thumb<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">:</span>  tint<span class="token operator">-</span><span class="token function">color</span><span class="token punctuation">(</span>$component<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">,</span> <span class="token number">70</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                            <span class="token comment" spellcheck="true">// Accordion</span><span class="token operator">-</span>button<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">:</span>              tint<span class="token operator">-</span><span class="token function">color</span><span class="token punctuation">(</span>$component<span class="token operator">-</span>active<span class="token operator">-</span>bg<span class="token punctuation">,</span> <span class="token number">90</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            $accordion<span class="token operator">-</span>button<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">:</span>           shade<span class="token operator">-</span><span class="token function">color</span><span class="token punctuation">(</span>$primary<span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            $accordion<span class="token operator">-</span>icon<span class="token operator">-</span>color<span class="token punctuation">:</span><span class="token operator">-</span>color<span class="token punctuation">;</span>
                            $accordion<span class="token operator">-</span>icon<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">:</span>             $accordion<span class="token operator">-</span>button<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token punctuation">;</span>
                            $accordion<span class="token operator">-</span>button<span class="token operator">-</span>active<span class="token operator">-</span>icon<span class="token punctuation">:</span>  <span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        </code>
                        </pre>
                        <button id="copy_id-1" data-clipboard-action="copy" data-clipboard-target="#copy-1" class="copy-link btn btn-primary btn-sm me-3">Copy</button>
                    </div>

                    <p class="mt-3">By using this method, You have to change color codes only at one place and all your website color shades will be set properly.</p>
                    <p>Gulp must be running in your system to compile this, so after saving <code>_user-variables.scss</code> file, Gulp will compile the same and you will see the new color scheme.</p>

                    { /* #2 Using CSS */}
                    <h3 class="mt-5">#2 Using CSS</h3>
                    <p>If you want to change theme default color scheme just using CSS, You can choose one of the 2 methods (We recommend Method 2 – Using color.css)</p>
                    <h6>Method 1: Using style.css</h6>
                    <p>If you don't want to take advantage of future updates of theme, You can change theme color by replacing your new HEX color code in <code>style.css</code> located in <code>template/assets/css</code> directory. Please note this is not recommended option.</p>

                    <h6>Method 2: Using color.css</h6>
                    <p>Please look out for <code>color.css</code> file in <code>template/assets/css</code> directory for new sample color as an example. You should link that CSS at the end in head section after theme CSS like below code:</p>

                    <div class="position-relative">
                        <pre id="copy-2" class="my-3 language-javascript"><code class="  language-javascript">
                            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Theme CSS <span class="token operator">--</span><span class="token operator">&gt;</span>
                            <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> type<span class="token operator">=</span><span class="token string">"text/css"</span> href<span class="token operator">=</span><span class="token string">"assets/css/style.css"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

                            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Theme Color CSS <span class="token operator">--</span><span class="token operator">&gt;</span>
                            <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> type<span class="token operator">=</span><span class="token string">"text/css"</span> href<span class="token operator">=</span><span class="token string">"assets/css/color.css"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                        </code>
                        </pre>
                        <button id="copy_id-2" data-clipboard-action="copy" data-clipboard-target="#copy-2" class="copy-link btn btn-primary btn-sm">Copy</button>
                    </div>

                    <p class="mb-0">Provided <code>color.css</code> within theme is for new color scheme as an example. Just make very few changes in variables of this file and you are good to go. A detailed explanation of how to change color can be found in <code>color.css</code> file.</p>

                    { /* Tab END */}



                    { /* Page content END */}
                </div>
            </div>
        </div>
    )
}

export default ColorScheme