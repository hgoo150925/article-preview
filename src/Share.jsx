import facebook from './assets/images/icon-facebook.svg';
import twitter from './assets/images/icon-twitter.svg';
import pinterest from './assets/images/icon-pinterest.svg';

export const Share = () => {
  return (
    <div class="social-media">
      <p>share</p>
      <ul>
        <li>
          <a href="#">
            <img src={facebook} alt="facebook icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="twitter icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={pinterest} alt="pinterest icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};
