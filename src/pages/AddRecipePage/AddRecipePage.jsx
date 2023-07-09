import React from 'react';
import CSS from './AddReceipePage.module.css';
import Banana_pancakes from '../../img/Banana_pancakes.jpg';
import Backed_salmon from '../../img/Baked_salmon.jpg';
import Sugar_pie from '../../img/Sugar_pie.jpg';
import Squash_linguine from '../../img/Squash_linguine.jpg';

function AddRecipePage() {
  return (
    <div className={CSS.container}>
      <h1 className={CSS.name_page}>Add recipe</h1>
      <div>
        <svg
          className={CSS.rectangle_11_position}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="5.91666" width="14" height="14" rx="3" transform="rotate(-25 0 5.91666)" fill="#8BAA36" />
        </svg>
        <svg
          className={CSS.rectangle_8_position}
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="5.07141" width="12" height="12" rx="3" transform="rotate(-25 0 5.07141)" fill="#22252A" />
        </svg>
        <svg className={CSS.rectangle_9_position} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="5.91663" width="14" height="14" rx="3" transform="rotate(-25 0 5.91663)" fill="#8BAA36" />
        </svg>
      </div>
      <div className={CSS.ZAGALOM}>
        <div className={CSS.add_Recipe_item_inputs}>
          <label htmlFor="img_recipe">
            <input className={CSS.upload_image} type="file" id="img_recipe" alt="upload_img" />
          </label>
          <div className={CSS.add_Recipe__inputs}>
            <label htmlFor="item_title" className={CSS.addRecipe_title}>
              Enter item title
              <input type="text" id="item_title" placeholder="Enter item title" />
            </label>
            <label htmlFor="about_recipe" className={CSS.addRecipe_about}>
              Enter about recipe
              <input type="text" id="about_recipe" placeholder="Enter about recipe" />
            </label>
            <label htmlFor="category" className={CSS.addRecipe_category}>
              Category
              <select>
                <option value="beef">Beaf</option>
                <option value="Breakfast">Breakfast</option>
                <option value="desert">Desert</option>
                <option value="goat">Goat</option>
                <option value="lamb">Lamb</option>
                <option value="volvo">Miscellaneous</option>
              </select>
              {/* <input type="text" id="category" className={CSS.add_Recipe__input} /> */}
            </label>
            <label htmlFor="cooking_time" className={CSS.addRecipe_time}>
              Cooking time
              <select>
                <option value="10">10 min</option>
                <option value="20">20 min</option>
                <option value="30">30 min</option>
                <option value="40">40 min</option>
                <option value="50">50 min</option>
                <option value="60">60 min</option>
                <option value="120">120 min</option>
                <option value="180">180 min</option>
              </select>
              {/* <input type="text" id="cooking_time" className={CSS.add_Recipe__input} /> */}
            </label>
          </div>
        </div>
        <div>
          <h3 className={CSS.fallow_block_text}>Fallow us</h3>
          <ul className={CSS.Fallow_us}>
            <li className="fallow-social-link">
              <a href="https://uk-ua.facebook.com" target="_blank" rel="noopener noreferrer nofollow" className="click">
                <svg className={CSS.fallow_social_icon} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26 13.0785C26 5.85615 20.179 0 13 0C5.82098 0 0 5.85615 0 13.0785C0 19.6061 4.75312 25.0168 10.9687 25.9988V16.8602H7.6671V13.0785H10.9687V10.1972C10.9687 6.91994 12.91 5.10822 15.8792 5.10822C17.3016 5.10822 18.7896 5.36395 18.7896 5.36395V8.58278H17.1496C15.5356 8.58278 15.0307 9.59053 15.0307 10.6263V13.0785H18.6358L18.0601 16.8602H15.0312V26C21.2469 25.0185 26 19.6079 26 13.0785V13.0785Z"
                  />
                </svg>
              </a>
            </li>
            <li className="fallow-social-link">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer nofollow" className="click">
                <svg className={CSS.fallow_social_icon} viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.8201 4.85763C27.8201 2.27957 26.0097 0.205671 23.7727 0.205671C20.7426 0.0572899 17.6524 0 14.4943 0H13.5098C10.3595 0 7.26375 0.05729 4.23368 0.206244C2.00215 0.206244 0.191763 2.2916 0.191763 4.86966C0.055027 6.90861 -0.00294906 8.94814 0.000332601 10.9877C-0.00513684 13.0272 0.0568502 15.0686 0.186294 17.112C0.186294 19.69 1.99668 21.7811 4.22821 21.7811C7.41142 21.9358 10.6767 22.0046 13.9966 21.9988C17.322 22.0103 20.5782 21.9377 23.765 21.7811C26.002 21.7811 27.8124 19.69 27.8124 17.112C27.9437 15.0667 28.0039 13.0272 27.9984 10.9819C28.0108 8.94241 27.9514 6.90098 27.8201 4.85763ZM11.3221 16.6078V5.35032L19.2528 10.9762L11.3221 16.6078Z" />
                </svg>
              </a>
            </li>
            <li className="fallow-social-link">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer nofollow" className="click">
                <svg className={CSS.fallow_social_icon} viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 2.60677C24.0622 3.05499 23.07 3.35029 22.0547 3.48333C23.1217 2.79605 23.9241 1.70418 24.3115 0.412508C23.3027 1.06139 22.2008 1.51667 21.0531 1.75886C20.5698 1.20172 19.9886 0.758494 19.3448 0.456133C18.7009 0.153772 18.0079 -0.00141357 17.3078 9.70198e-06C14.4734 9.70198e-06 12.1797 2.48646 12.1797 5.55155C12.1777 5.9779 12.2221 6.40297 12.312 6.8177C10.2795 6.71289 8.28934 6.14256 6.46874 5.14321C4.64815 4.14386 3.03723 2.73749 1.73906 1.01407C1.28363 1.85861 1.04278 2.82221 1.04167 3.80416C1.04167 5.72916 1.95469 7.43072 3.33333 8.42759C2.51652 8.40626 1.71645 8.16846 1.00104 7.73436V7.80311C1.00104 10.4958 2.77187 12.7359 5.11562 13.2458C4.67489 13.375 4.22071 13.4405 3.76458 13.4406C3.44093 13.4412 3.118 13.4067 2.80052 13.3375C3.45208 15.5432 5.34844 17.1474 7.59479 17.1932C5.76947 18.7406 3.52845 19.5769 1.22396 19.5708C0.814905 19.5701 0.406232 19.5433 0 19.4906C2.34436 21.1373 5.0695 22.0083 7.85104 21.9999C17.2969 21.9999 22.4573 13.538 22.4573 6.19895C22.4573 5.95832 22.4516 5.7177 22.4411 5.4828C23.4428 4.69909 24.3093 3.72517 25 2.60677V2.60677Z" />
                </svg>
              </a>
            </li>
            <li className="fallow-social-link">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer nofollow" className="click">
                <svg className={CSS.fallow_social_icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9998 1.99982C18.3248 2.00378 19.5943 2.53187 20.5312 3.46876C21.4681 4.40566 21.9962 5.67522 22.0002 7.00018V16.9998C21.9962 18.3248 21.4681 19.5943 20.5312 20.5312C19.5943 21.4681 18.3248 21.9962 16.9998 22.0002H7.00018C5.67522 21.9962 4.40566 21.4681 3.46876 20.5312C2.53187 19.5943 2.00378 18.3248 1.99982 16.9998V7.00018C2.00378 5.67522 2.53187 4.40566 3.46876 3.46876C4.40566 2.53187 5.67522 2.00378 7.00018 1.99982H16.9998V1.99982ZM16.9998 0H7.00018C3.15 0 0 3.15 0 7.00018V16.9998C0 20.85 3.15 24 7.00018 24H16.9998C20.85 24 24 20.85 24 16.9998V7.00018C24 3.15 20.85 0 16.9998 0V0Z" />
                  <path d="M18.4998 7.00226C18.2032 7.00226 17.9131 6.91429 17.6665 6.74946C17.4198 6.58464 17.2275 6.35037 17.114 6.07628C17.0005 5.80219 16.9708 5.50059 17.0286 5.20962C17.0865 4.91865 17.2294 4.65138 17.4392 4.4416C17.6489 4.23182 17.9162 4.08896 18.2072 4.03108C18.4982 3.9732 18.7998 4.00291 19.0739 4.11644C19.3479 4.22997 19.5822 4.42223 19.747 4.6689C19.9119 4.91558 19.9998 5.20559 19.9998 5.50226C20.0002 5.69936 19.9617 5.8946 19.8865 6.07678C19.8113 6.25896 19.7008 6.42449 19.5614 6.56386C19.4221 6.70324 19.2565 6.81371 19.0744 6.88894C18.8922 6.96417 18.6969 7.00268 18.4998 7.00226V7.00226ZM12 8.0019C12.7912 8.0019 13.5646 8.23651 14.2224 8.67605C14.8802 9.1156 15.3929 9.74034 15.6957 10.4713C15.9985 11.2022 16.0777 12.0065 15.9233 12.7825C15.769 13.5584 15.388 14.2712 14.8286 14.8306C14.2691 15.3901 13.5564 15.771 12.7804 15.9254C12.0044 16.0797 11.2001 16.0005 10.4692 15.6978C9.73826 15.395 9.11352 14.8823 8.67398 14.2245C8.23443 13.5666 7.99982 12.7932 7.99982 12.0021C8.00096 10.9415 8.42277 9.92471 9.1727 9.17478C9.92264 8.42485 10.9394 8.00304 12 8.0019V8.0019ZM12 6.00208C10.8133 6.00208 9.65328 6.35397 8.66658 7.01326C7.67989 7.67255 6.91085 8.60962 6.45673 9.70598C6.0026 10.8023 5.88378 12.0087 6.11529 13.1726C6.3468 14.3365 6.91825 15.4056 7.75736 16.2447C8.59648 17.0838 9.66557 17.6553 10.8295 17.8868C11.9933 18.1183 13.1997 17.9995 14.2961 17.5454C15.3925 17.0912 16.3295 16.3222 16.9888 15.3355C17.6481 14.3488 18 13.1888 18 12.0021C18 10.4108 17.3679 8.88466 16.2426 7.75944C15.1174 6.63422 13.5913 6.00208 12 6.00208V6.00208Z" />
                </svg>
              </a>
            </li>
          </ul>
          <h3 className={CSS.popular_block_text}>Popular recipe</h3>
          <ul className={CSS.popular_recipe}>
            <li className={CSS.popular_item}>
              <img src={Banana_pancakes} alt="banana pincakes" className={CSS.popular_item__img} />
              <div>
                <h3>Banana Pincakes</h3>
                <p className={CSS.popular_item_description}>In a bowl, mash the banana with a fork until it resembles a thick purée...</p>
              </div>
            </li>
            <li className={CSS.popular_item}>
              <img src={Sugar_pie} alt="squash" className={CSS.popular_item__img} />
              <div>
                <h3>Squash linguine</h3>
                <p className={CSS.popular_item_description}>
                  Pasta is a type of food typically made from an unleavened dough of wheat flour...
                </p>
              </div>
            </li>
            <li className={CSS.popular_item}>
              <img src={Backed_salmon} alt="Baked" className={CSS.popular_item__img} />
              <div>
                <h3>Baked salmon</h3>
                <p className={CSS.popular_item_description}>Cook in boiling salted water for 10 mins...</p>
              </div>
            </li>
            <li className={CSS.popular_item}>
              <img src={Squash_linguine} alt="Sugar" className={CSS.popular_item__img} />
              <div>
                <h3>Sugar Pie</h3>
                <p className={CSS.popular_item_description}>
                  Sugar pie is a dessert in northern French and Belgiancuisine, where it is called tarte...
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddRecipePage;