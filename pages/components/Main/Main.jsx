import React from 'react'
import styles from './main.module.css'
const main = () => {
  return (
    <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.img_1}></div>
                <div className={styles.flexImgcontainer} >
                    <div className={styles.img_2} >
                        <img src='./Pic_1.png' />                   
                    </div>
                    <div className={styles.img_2} >

                    </div>
                    <div className={styles.img_2} >

                    </div>
                    <div className={styles.img_2} >

                    </div>
                    <div className={styles.img_2} >

                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <p className={styles.text_1}>Clothing</p>
                <style jsx>{
                    `
                    p{
                        color:#A0A0A0;
                    }
                    `
                }</style>
                <div className={styles.text_4}>
                    Leather boots with tall leg
                </div>
                <div className={styles.right_container_1}>
                    <div className={styles.stars}>
                       
                    </div>
                    <div className={styles.text_2}/>
                        (1.234 reviews)
                    </div><style jsx>
                        {`
                        color: #616161;
                        `}
                    </style>

                    <div className={
                        styles.text_2 
                    }>

                        A515-56-36UT
                    </div>
                    <style jsx>
                        {`div{
                        color: #616161;
                        }
                        `}
                    </style>
                    
                    <div className={styles.text_2}>
                        In Stock
                    </div>
                    <style jsx>
                        {`
                        .text_2{
                            color: #3DAB25;
                        }
                        `}
                    </style>
                </div>
                <div className={styles.right_container_2}>
                    <div className={styles.text_5}>$68.00</div>
                    <div className={styles.text_4}>
                        $98.00
                    </div>
                    <p className="text_0">
                        The garments labelled as Committed are products that have been produced using 
                        sustainable fibres or processes, reducing their environmental impact.
                    </p>
                </div>
                <div className={styles.right_container_3} >
                    <div className={styles.text_4}>sold It:</div>
                    <div>
                        <div className="line"></div>
                        <div className="text_2">Available: 20</div>
                    </div>
                </div>
                <div className="right_container_4">
                    <div className="text_h">
                    Hurry Up! <br/> 
                    Offer ends in:
                    </div>
                    <div className="right_timecontainer">
                        <div className="text_h">
                        12 Days
                        </div>
                        <div className="text_h">
                        03 hours
                        </div>
                        <div className="text_h">
                        14 Mins
                        </div>
                        <div className="text_h">
                        21 Secs
                        </div>
                    </div>
                </div>
                <hr className='separator'/>
                <div className="right_container_5">
                Size: M
                </div>
                <div className="right_container_6">
                    <div className="text_2">
                    XS
                    </div>
                    <div className="text_2">
                    S
                    </div>
                    <div className="text_2">
                    M
                    </div>
                    <div className="text_2">
                    L 
                    </div>
                    <div className="text_2">
                    XL
                    </div>
                    <div className="text_2">
                    XXL
                    </div>
                    <div className="text_2">
                    View Size Guild
                    </div>
                    
                </div>
                <div className="right_container_7">
                    <p className="text_4">Quantity:</p>
                    <p className="text_2">Wish List</p>
                </div>
                <div className="right_container_8">
                    <div className="buttons"></div>
                    <div className="text_4">Add to cart</div>
                    <div className="img-icons"></div>
                    <div className="img-icons"></div>
                </div>
                <div className="right_container_9">
                    <div className="text_2">
                    Ready to ship | Order today
                    </div>
                    <div className="imgp">

                    </div>
                </div>
                <div className="right_container_10">
                    <div className="text_2"></div>
                </div>
            </div>
  )
}

export default main