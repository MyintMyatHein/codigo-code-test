import workStyles from '../../styles/work.module.scss'

import { useRouter } from 'next/router'
import { useEffect, useLayoutEffect, useState } from "react";

import Footer from "../../components/Footer"
import LetsChat from '../../components/LetsChat'

let caroTimeout = null

function WorkDetail({ Component, pageProps }) {
    const router = useRouter()
    const { workId } = router.query
    const [caroImageIndex, setCaroImageIndex] = useState(0)

    useEffect(() => {
        if (caroTimeout) clearTimeout(caroTimeout)
        caroTimeout = setTimeout(() => {
            setCaroImageIndex(caroImageIndex < carouselImages.length - 1 ? caroImageIndex + 1 : 0)
            if (caroTimeout) clearTimeout(caroTimeout)
        }, 1000 * 5)
    }, [caroImageIndex])

    return (
        <div className={workStyles.workDetailContaier}>
            <div className={workStyles.workDetailPanel}>
                <div className={workStyles.backMenu} onClick={() => router.back()}>Back to Work<div></div></div>
                <div className={workStyles.menuRequestQuote}>Request a quote</div>
            </div>
            <div className={workStyles.ProductContainer}>
                <div className={workStyles.ProductName}>OCBC Pay <br />Anyone</div>
                <div className={workStyles.ProductInfo}>
                    <div className={workStyles.ProductInfoContainer}>
                        <div className={workStyles.Store}>
                            <div className={workStyles.StoreItem}>
                                <img src="https://www.codigo.co/img/ui/ico-app_store@2x.png" alt="App Store" />
                                <div className={workStyles.StoreText1}>AVAILABLE ON</div>
                                <div className={workStyles.StoreText2}>App store</div>
                            </div>
                            <div className={workStyles.StoreItem}>
                                <img src="https://www.codigo.co/img/ui/ico-google_play-store@2x.png" alt="Google Play" />
                                <div className={workStyles.StoreText1}>AVAILABLE ON</div>
                                <div className={workStyles.StoreText2}><strong>Google play</strong></div>
                            </div>
                        </div>

                        <div className={workStyles.ProductDescription}>
                            You can now pay kopitiam uncles, merchants, peers, and dears with the OCBC Pay Anyone app, and you can even withdraw cash by scanning the QR code at OCBC’s ATMs without your card!
                        </div>
                        <div className={workStyles.ProductKeyFeatures}>
                            <div className={workStyles.KeyFeatureTitle} >Key Features</div>
                            <div className={workStyles.KeyFeatureContainer}>
                                <div className={workStyles.KeyFeature}>Scan to pay</div>
                                <div className={workStyles.KeyFeature}>Transfer cash and request payment</div>
                                <div className={workStyles.KeyFeature}>ATM QR cash withdrawal</div>
                                <div className={workStyles.KeyFeature}>Access exclusive discounts and promotions</div>
                            </div>
                        </div>
                    </div>
                    <div className={workStyles.CarouselContainer}>
                        <div className={workStyles.caroBg}>
                            {carouselImages.map((image, i) => (
                                <img key={i} src={image} style={{ opacity: i === caroImageIndex ? 1 : 0 }} alt={caroImageIndex} className={workStyles.caroImage} />
                            ))}
                            <div className={workStyles.caroLegend}>
                                {carouselImages.map((_, i) => (
                                    <div key={i} onClick={() => setCaroImageIndex(i)} style={{ opacity: i === caroImageIndex ? 1 : 0.2 }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={workStyles.ArrowContainer}>
                    <div><img src="https://www.codigo.co/img/ui/arrow-left-white.svg" alt="left-arrow" /></div>
                    <div><img src="https://www.codigo.co/img/ui/arrow-right-white.svg" alt="right-arrow" /></div>
                </div>
            </div>
            <LetsChat />
            <Footer />
        </div>
    )
}

export default WorkDetail

const carouselImages = ["https://cdn.codigo.co/uploads/2021/04/PAO-1@2x.png", "https://cdn.codigo.co/uploads/2021/04/PAO-2-1@2x.png", "https://cdn.codigo.co/uploads/2021/04/PAO-3@2x.png", "https://cdn.codigo.co/uploads/2021/04/PAO-4-1@2x.png", "https://cdn.codigo.co/uploads/2021/04/PAO-5@2x.png"]
