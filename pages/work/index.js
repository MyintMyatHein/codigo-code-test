import workStyles from '../../styles/work.module.scss'

import { useRouter } from 'next/router'
import { useState } from "react"

import Footer from "../../components/Footer"
import LetsChat from '../../components/LetsChat'

function Work({ Component, pageProps }) {
  const router = useRouter()
  const [toggleSelected, setToggleSelected] = useState(false)

  return (
    <div className={workStyles.workMain}>
      <header className={workStyles.header}>
        <div className={workStyles.logoContainer}>
          <img src='https://www.codigo.co/img/ui/logo-codigo-red.svg' alt="codigo-logo" />
        </div>
        <div className={workStyles.menuContainer} selectedd={toggleSelected ? "true" : undefined}>
          <div className={workStyles.menu} style={{ fontWeight: 'bold' }}>Work<div></div></div>
          <div className={workStyles.menu}>Solution<div></div></div>
          <div className={workStyles.menu}>Services<div></div></div>
          <div className={workStyles.menu}>About us<div></div></div>
          <div className={workStyles.menu}>Blog<div></div></div>
          <div className={workStyles.menuRequestQuote}>Request a qoute</div>
          <div className={workStyles.menuRequestQuote + " " + workStyles.letsChatMobile}>Let's chat</div>
          <div className={workStyles.toggleButton} selectedd={toggleSelected ? "true" : undefined} onClick={() => {
            setToggleSelected(!toggleSelected)
          }}>
            <div></div>
          </div>
        </div>
      </header>
      <div className={workStyles.workContainer}>
        <div className={workStyles.quoteHeading}>
          <div className={workStyles.firstQuote}>Here's 5% of<br />our published work.</div>
          <div className={workStyles.secondQuote}>See 100% of our power.</div>
        </div>
        <div className={workStyles.categoryContainer}>
          <div className={workStyles.category}>
            {
              categoriesData.map((v, k) => <div key={k} className={workStyles.categoryItem} selected={k === 0 ? "true" : undefined}>{v}</div>)
            }
          </div>
          <div className={workStyles.legend}>
            <div className={workStyles.legendTitle}>Legend</div>
            <div className={workStyles.legendBody}>
              {builtWiths.map((v, i) => (
                <div className={workStyles.legendItem} key={v.name}>
                  <img src={v.image} alt={v.name} />
                  <div>{v.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={workStyles.productContainer}>
          {product_lists.map((v, k) => (
            <div key={k} onClick={() => router.push(`/work/${v.product_name.toLocaleLowerCase().replaceAll(" ", "-").replaceAll("/", "-")}`)} className={workStyles.productItem} gsize={v.grid_size * 4} light={v.light ? "true" : undefined} style={{ gridColumn: `auto / span ${v.grid_size * 4}` }}>
              <img src={v.image} alt={v.product_name}></img>
              <div className={workStyles.contentContainer}>
                <div>
                  <div className={workStyles.category}>{v.category.join(", ")}</div>
                  <div className={workStyles.productName}>{v.product_name}</div>
                </div>
                <div className={workStyles.builtType}>
                  <div style={{ display: "flex" }}>
                    {(() => {
                      const bItems = v.built_with.map((b) => builtWiths.find(bb => bb.name === b))
                      return bItems.map(bi => (
                        <div key={bi.name} className={workStyles.builtTypeItems}>
                          <img src={bi.image} alt={bi.name} style={{ width: "100%" }} />
                        </div>
                      ))
                    })()}
                  </div>
                </div>
              </div>
              {/* <pre>{JSON.stringify(v, null, 2)}</pre> */}
            </div>
          ))}
        </div>
        <LetsChat />
      </div>
      <Footer />
    </div>
  )
}

export default Work;

const builtWiths = [
  {
    name: "APP",
    image: "https://www.codigo.co/img/ui/ico-app.svg"
  },
  {
    name: "WEB",
    image: "https://www.codigo.co/img/ui/ico-web.svg"
  },
  {
    name: "CMS",
    image: "https://www.codigo.co/img/ui/ico-cms.svg"
  },
  {
    name: "UI/UX",
    image: "https://www.codigo.co/img/ui/ico-uiux.svg"
  }
]

const categoriesData = ["All", "Food & Beverage", "Media", "Transport & Logistics", "Banking & Finance", "Lifestyle", "Co-incubation", "Healthcare", "Retail & Entertainment", "Telco", "Others", "Start-ups"];

const product_lists = [
  {
    "category": ["Banking & Finance"],
    "product_name": "OCPC Pay Anyone",
    "built_with": ["APP", "UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2021/04/PAO-0@2x.jpg",
    "grid_size": 0.5,
  },
  {
    "category": ["Others"],
    "product_name": "Ecolab",
    "built_with": ["APP", "CMS", "UI/UX"],
    "image": " https://cdn.codigo.co/uploads/2021/04/ECO-0@2x.jpg",
    "grid_size": 0.25
  },
  {
    "category": ["Others", "Start-ups"],
    "product_name": "KIWI Auto Marketplace",
    "built_with": ["APP", "WEB", "CMS", "UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2021/04/KIWI-0@2x.jpg",
    "grid_size": 0.25
  },
  {
    "category": ["Lifestyle"],
    "product_name": "Furama Hotels",
    "built_with": ["APP", "UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2021/04/FURAMA-0@2x.jpg",
    "grid_size": 0.25
  },
  {
    "category": ["Transport & Logistics"],
    "product_name": "Woodlands Transport",
    "built_with": ["APP", "WEB", "CMS", "UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2021/04/WTS-0@2x.jpg",
    "grid_size": 0.25
  },
  {
    "category": ["Lifestyle", "Retail & Entertainment", "Start-ups"],
    "product_name": "Ready To Travel (SATS)",
    "built_with": ["APP", "WEB", "CMS", "UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2021/04/RTT-0@2x.jpg",
    "grid_size": 0.5,
    "light": true
  },
  {
    "category": ["Lifestyle"],
    "product_name": "Yoga Movement",
    "built_with": ["APP", "WEB", "CMS", "UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2021/04/YM-0@2x-1.jpg",
    "grid_size": 0.5
  },
  {
    "category": ["Retail & Entertainment"],
    "product_name": "Don Don Donki",
    "built_with": ["APP", "CMS", "UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2021/04/DONKI-0@2x.jpg",
    "grid_size": 0.5
  },
  {
    "category": ["Transport & Logistics"],
    "product_name": "TAP Ride Hailing",
    "built_with": ["APP"],
    "image": "https://cdn.codigo.co/uploads/2021/04/TAP-0@2x.jpg",
    "grid_size": 0.25
  },
  {
    "category": ["Others"],
    "product_name": "FWD Insurance",
    "built_with": ["APP", "CMS", "UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2021/04/FWD-0@2x.jpg",
    "grid_size": 0.5
  },
  {
    "category": ["Retail & Entertainment"],
    "product_name": "Isetan",
    "built_with": ["APP", "CMS", "UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2021/04/ISETAN-0@2x.jpg",
    "grid_size": 0.25
  },
  {
    "category": ["Retail & Entertainment"],
    "product_name": "HBO GO",
    "built_with": ["APP", "UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2021/04/HBO-0@2x-2.jpg",
    "grid_size": 0.5
  },
  {
    "category": ["Telco"],
    "product_name": "MyRepublic Mobile",
    "built_with": ["APP", "UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2018/12/MYR.jpg",
    "grid_size": 0.25
  },
  {
    "category": ["Transport & Logistics"],
    "product_name": "ComfortDelGro",
    "built_with": ["APP"],
    "image": "https://cdn.codigo.co/uploads/2018/08/CDG-2-1.jpg",
    "grid_size": 0.25,
    "light": true
  },
  {
    "category": ["Retail & Entertainment"],
    "product_name": "7Rewards",
    "built_with": ["APP", "WEB", "CMS"],
    "image": "https://cdn.codigo.co/uploads/2018/04/711.jpg",
    "grid_size": 0.5
  },
  {
    "category": ["Retail & Entertainment"],
    "product_name": "FairPrice Online",
    "built_with": ["UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2018/08/FPOL.jpg",
    "grid_size": 0.5
  },
  {
    "category": ["Retail & Entertainment"],
    "product_name": "Charles & Keith / Pedro",
    "built_with": ["APP"],
    "image": "https://cdn.codigo.co/uploads/2018/12/ck.jpg",
    "grid_size": 0.5,
    "light": true
  },
  {
    "category": ["Retail & Entertainment"],
    "product_name": "Justice League",
    "built_with": ["APP"],
    "image": "https://cdn.codigo.co/uploads/2018/11/thumbnail-justice_league@2x.jpg",
    "grid_size": 0.5
  },
  {
    "category": ["Healthcare"],
    "product_name": "Fullerton Health",
    "built_with": ["APP"],
    "image": "https://cdn.codigo.co/uploads/2018/11/fullerton-health-thumbnail@2x.jpg",
    "grid_size": 0.25
  },
  {
    "category": ["Lifestyle"],
    "product_name": "Sky Premium",
    "built_with": ["APP", "WEB"],
    "image": "https://cdn.codigo.co/uploads/2018/11/skypremium-thumbnail@2x.jpg",
    "grid_size": 0.25
  },
  {
    "category": ["Lifestyle"],
    "product_name": "T Singapore",
    "built_with": ["WEB", "CMS"],
    "image": "https://cdn.codigo.co/uploads/2018/12/TSingapore-thumbnail@2x.jpg",
    "grid_size": 0.5
  },
  {
    "category": ["Transport & Logistics"],
    "product_name": "Sing Post",
    "built_with": ["APP", "UI/UX"],
    "image": "https://cdn.codigo.co/uploads/2018/12/singpost-thumbnail@2x.jpg",
    "grid_size": 0.25
  },
  {
    "category": ["Co-incubation", "Start-ups", "Food & Beverage"],
    "product_name": "Dine Inn",
    "built_with": ["APP", "WEB", "CMS"],
    "image": "https://cdn.codigo.co/uploads/2018/12/dineinn.jpg",
    "grid_size": 0.25
  },
  {
    "category": ["Transport & Logistics"],
    "product_name": "Siemens Engineering",
    "built_with": ["APP", "WEB", "CMS"],
    "image": "https://cdn.codigo.co/uploads/2018/11/siemens.jpg",
    "grid_size": 0.25
  },
  {
    "category": [""],
    "product_name": "Singapore Grand Prix",
    "built_with": ["APP", "WEB", "CMS"],
    "image": "https://cdn.codigo.co/uploads/2018/12/f1.jpg",
    "grid_size": 0.25
  },
  {
    "category": ["Transport & Logistics", "Co-incubation", "Start-ups"],
    "product_name": "FastFast Delivery",
    "built_with": ["APP", "WEB", "CMS"],
    "image": "https://cdn.codigo.co/uploads/2018/12/FF-1.jpg",
    "grid_size": 0.5
  },

  {
    "category": ["Food & Beverage"],
    "product_name": "McDonald's",
    "built_with": ["APP"],
    "image": "https://cdn.codigo.co/uploads/2018/12/mc-cafe-thumbnail@2x.jpg",
    "grid_size": 0.25
  },
]