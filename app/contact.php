<!DOCTYPE html>
<html lang="en">
<?php require_once('head.php'); ?>
<body>
<div class="container wrapper">
    <div class="row justify-content-center">
        <?php require_once('navbar.php'); ?>
    </div>
    <div class="row justify-content-center">
        <div class="container-fluid content col-12">
            <div class="row align-items-center justify-content-between">
                <div class="content_header cChange col-12">
                    <div class="container portfolio page">
                        <div class="row align-items-center justify-content-center">
                            <h1>Contact</h1>
                        </div>
                    </div>
                </div>
                <div class="content_main col-12">
                    <div class="contact col-12">
                        <div class="row">
                            <div class="contact_info-list col-lg-6 col-12">
                                <h2>Get in <span class="cChange">Touch</span></h2>
                                <div class="ymaps" style="height: 240px">
                                    <script type="text/javascript" charset="utf-8" async
                                            src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa3ab8e1d250589aba08e407d4e267553de3669930e8fbe2c54b4f232205942d1&amp;width=100%&amp;height=240&amp;lang=ru_RU&amp;scroll=true"></script>
                                </div>
                                <br/>
                                <div class="info">
                                    <div class="info_el"><i class="fas fa-map-marker-alt cChange"></i>  <span>Yerevan, Armenia</span></div>
                                    <div class="info_el"><i class="fas fa-envelope cChange"></i>  <span>tig.vardanyan.001@gmail.com</span></div>
                                    <div class="info_el"><i class="fas fa-phone cChange"></i>  <span>+374 77 720166</span></div>
                                    <div class="info_el"><i class="fas fa-check cChange"></i>  <span>Freelance Available</span></div>
                                </div>
                            </div>
                            <div class="contact_form col-lg-6 col-12">
                                <h2>Contact <span class="cChange">Form</span></h2>
                                <form name="contact_form" action="send_message.php">
                                    <div class="contact_form_user">
                                        <i class="fas fa-user cChange" ></i>
                                        <label for="contf_full_name">Full name</label>
                                        <input id="contf_full_name" type="text" name="full_name">
                                    </div>
                                    <div class="contact_form_email">
                                        <i class="fas fa-envelope cChange"></i>
                                        <label for="contf_email">Email</label>
                                        <input id="contf_email" type="email" name="email">
                                    </div>
                                    <div class="contact_form_message">
                                        <i class="fas fa-comment cChange"></i>
                                        <label for="contf_message">Message</label>
                                        <textarea name="message" id="contf_message" rows="6"></textarea>
                                    </div>
                                    <input class="cont_submit cChange" type="submit" value="SEND MESSAGE" placeholder="send message">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">
        <footer>© 2017 All rights reserved.</footer>
    </div>
</div>







<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script src="js/script.js"></script>
<script src="js/contactFormScripts.js"></script>
</body>
</html>