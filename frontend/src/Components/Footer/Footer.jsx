import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div>
              <h3>Logo</h3>
              <p class="mb-30 footer-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                soluta facilis eos quia optio iusto odit atque eum tempore,
                quisquam officiis vero veniam hic,
              </p>
            </div>
          </div>
          <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
            <div class="">
              <h4>Quick Link</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/signup" class="text-decoration-none">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/login" class="text-decoration-none">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/supoort" class="text-decoration-none">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-6">
            <div>
              <h4>Contact Us</h4>
              <ul class="list-unstyled">
                <li>
                  <p>Katubedda,Moratuwa</p>
                </li>
                <li>
                  <p>011-4545567</p>
                </li>
                <li>
                  <p>EzPark@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div>
              <h4>Follow Us on</h4>
              <div>
          <ul class="d-flex gap-3 list-unstyled">
            <li><a href="#"><i class="bi bi-facebook"></i></a></li>
            <li><a href="#"><i class="bi bi-twitter"></i></a></li>
            <li><a href="#"><i class="bi bi-instagram"></i></a></li>
          </ul>
        </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <div class="copyright">
            <p>
              Developed and maintained by{" "}
              
                company
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
