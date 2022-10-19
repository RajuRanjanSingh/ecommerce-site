import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.right_container}>
                <ul className={styles.container_1}>
                    <li className={styles.list_1}>English
                    <span className={styles.img_arrow}>
                        <img src="/Stroke_1.png" alt=""  className={styles.stoke_1}/>
                    </span>
                    </li>
                    <li className={styles.list_1}>USD
                    <span className={styles.img_arrow}>
                        <img src="/Stroke_1.png" alt=""  className={styles.stoke_1}/>
                    </span>
                    </li>
                </ul>
                <ul className={styles.container_2}>
                    <li className={styles.list_items}>Home</li>
                    <li className={styles.list_items}>School Uniforms</li>
                    <li className={styles.list_items}>Corporate</li>
                    <li className={styles.list_items}>Sports</li>
                    <li className={styles.list_items}>Blogs</li>
                </ul>
            </div>
        </div>
        <div className={styles.container_3}>
            <div className={styles.text_1}>
            Free Delivery on orders above Rs. 1000,  DON’T MISS
            </div>
            <div className={styles.text_2}>Shop NOW</div>
        </div>
        <div className={styles.container_4}>
        Home / Category Sports / 
         
        <span className={styles.content}>Football Shirt 
        </span>
        </div>
    </div>
  )
}

export default Header