import { createSlice } from "@reduxjs/toolkit";



let l=[{price:1500,location:'New york',type:'House',
image:'https://resihome.com/wp-content/uploads/2021/10/Annapolis-Longview.jpg',
size:'3 BED | 2 BATH | 1,461 SQ. FT.',city:'Yonkers'},
{price:3500,location:'New york',type:'House',
image:'https://resihome.com/wp-content/uploads/2021/01/Atlanta-Exterior.jpg',
size:'4 BED | 2.5 BATH | 2,582 SQ. FT.',city:'New york City'},
{price:3000,location:'Los Angeles',type:'House',
image:'https://resihome.com/wp-content/uploads/2021/05/TPU_2531_Rend_Concord_B-1024x576.jpg',
size:'6 BED | 3 BATH | 2,580 SQ. FT.',city:'Los Angeles CA'},
{price:2000,location:'Los Angeles',type:'House',
image:'https://resihome.com/wp-content/uploads/2021/01/Providence-Exterior.jpg',
size:'4 BED | 2.5 BATH | 2,582 SQ. FT.',city:'Los Angeles CA'},
{price:4000,location:'Los Angeles',type:'House',
image:'https://resihome.com/wp-content/uploads/2022/04/2216-Boston-A-elev_DSK-1024x576.jpg',
size:'5 BED | 2.5 BATH | 2,215 SQ. FT.',city:'Los Angeles CA'},
{price:4000,location:'Washington',type:'House',
image:'https://resihome.com/wp-content/uploads/2021/03/Bryant-Square-Townhomes-v1.jpg',
size:'4 BED + LOFT | 2.5 BATH | 2,466 SQ. FT.',city:'Washington'},
{price:3000,location:'Washington',type:'House',
image:'https://www.richmondamerican.com/content/plans/media-30413.jpg',
size:'3 BED + LOFT | 2.5 BATH | 2,166 SQ. FT.',city:'Washington'},
{price:1000,location:'Washington',type:'House',
image:'https://static01.nyt.com/images/2020/06/28/realestate/24WYG-slide-027H/24WYG-slide-027H-superJumbo.jpg',
size:'2 BED + LOFT | 2.5 BATH | 2,066 SQ. FT.',city:'Washington'},
{price:600,location:'New York',type:'House',
image:'https://www.ecohome.net/media/articles/images/9b/2f/9b2fab04af038277b850abc9be63976a579d3949/thumbs/NVNMsH89hLc4_1200x500_Q9YtDUVi.jpg',
size:'1 BED + LOFT | 1 BATH | 1,066 SQ. FT.',city:'Utica'},
{price:4000,location:'New york',type:'House',
image:'https://static01.nyt.com/images/2022/06/02/realestate/02OTM-NYC-01/02OTM-NYC-videoSixteenByNine3000.jpg',
size:'4 BED | 3 BATH | 2500 SQ. FT.',city:'Yonkers'},
{price:3000,location:'New york',type:'House',
image:'https://static01.nyt.com/images/2019/09/29/realestate/29selling-NJ/oakImage-1568402320902-jumbo.jpg',
size:'3 BED | 2 BATH | 2200 SQ. FT.',city:'Albany'},
{price:1000,location:'New york',type:'House',
image:'https://static01.nyt.com/images/2020/10/04/realestate/04selling-LI/oakImage-1600449152054-superJumbo.jpg',
size:'2 BED | 2 BATH | 1700 SQ. FT.',city:'New Rochelle'},
{price:2000,location:'New york',type:'House',
image:'https://pi.movoto.com/p/484/RPLU-5122154369_0_VZeuQM_p.jpeg',
size:'2 BED | 3 BATH | 1800 SQ. FT.',city:'utica'},
{price:2000,location:'Los Angeles',type:'House',
image:'https://media.cnn.com/api/v1/images/stellar/prod/210206204954-01-first-3d-printed-house-united-states-for-sale-trnd.jpg?q=w_2000,h_1125,x_0,y_0,c_fill',
size:'3 BED | 3 BATH | 1950 SQ. FT.',city:'Long Beach'},
{price:3000,location:'Los Angeles',type:'House',
image:'https://cdn.nar.realtor/sites/default/files/assets/images/2108_DNG_3Dprintedhome.jpg',
size:'3 BED | 3 BATH | 2250 SQ. FT.',city:'Santa Monica'},
{price:3700,location:'Los Angeles',type:'House',
image:'https://ap.rdcpix.com/00e0a2547506f441b73a11a55841d10dl-m752842165od-w480_h360_x2.jpg',
size:'3 BED | 3 BATH | 2250 SQ. FT.',city:'Glendale'},
{price:1200,location:'Los Angeles',type:'House',
image:'https://cdn.landsearch.com/listings/4nWzJ/small/munnsville-ny-93900614.jpg',
size:'2 BED | 2 BATH | 1650 SQ. FT.',city:'Long Beach'},
{price:1100,location:'Washington',type:'House',
image:'https://mediavault.point2.com/p2h/listing/e523/0988/b73e/423a8bef2c5c3dc7e515/nwm_medium.jpg',
size:'1 BED | 2 BATH | 1550 SQ. FT.',city:'Spokane'},
{price:1900,location:'Washington',type:'House',
image:'https://rew-feed-images.global.ssl.fastly.net/realtracs/_cloud_media/property/farm/rtc2427991-2-f04cf7a68296dd33d806451bca7efc95-l.jpg',
size:'2 BED | 2 BATH | 2050 SQ. FT.',city:'Olympia'},
{price:1300,location:'Washington',type:'House',
image:'https://www.itinyhouses.com/wp-content/uploads/2021/12/10-Amazing-Tiny-Houses-For-Sale-In-New-York-You-Can-Buy-Today-featured.jpg',
size:'1 BED | 2 BATH | 1650 SQ. FT.',city:'Spokane'},
{price:3600,location:'Washington',type:'House',
image:'https://cdn.vox-cdn.com/thumbor/0eoiN9XqqsSVbiCNo_h0hbUP_yI=/0x0:1023x682/1200x800/filters:focal(431x260:593x422)/cdn.vox-cdn.com/uploads/chorus_image/image/64006695/0b0cd00c_891f_49a5_a75c_cdd640a23020.f10.0.jpg',
size:'2 BED | 2 BATH | 2080 SQ. FT.',city:'Seattle'},
{price:2000,location:'New York',type:'Hotel',
image:'https://d.newsweek.com/en/full/1523928/hanoi-soup-shop.jpg?w=1600&h=1600&q=88&f=365958b40069e7e69652a2cfa94948d3',
size:'1,066 SQ. FT.',city:'Buffalo'},
{price:2500,location:'New York',type:'Hotel',
image:'https://cdn.vox-cdn.com/thumbor/CPOeRS-UEbYs-rSoXzV2LQAd0e8=/0x0:5760x3840/1200x900/filters:focal(2420x1460:3340x2380):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62643457/Arthur_Avenue_74.8.jpg',
size:'2,066 SQ. FT.',city:'Rochester'},
{price:2500,location:'Los Angeles',type:'Hotel',
image:'https://upserve.com/media/sites/2/restaurant-colors-inside-a-restaurant.jpg',
size:'1500 SQ. FT.',city:'Long Beach'},
{price:1600,location:'Los Angeles',type:'Hotel',
image:'https://mcdonaldpaper.com/media/wysiwyg/blog/blog_21-10-20-2.jpg',
size:'1000 SQ. FT.',city:'Santa Monica'},
{price:4000,location:'Los Angeles',type:'Hotel',
image:'https://assets.entrepreneur.com/content/3x2/2000/20190409170907-GettyImages-1004195488.jpeg?crop=16:9',
size:'2000 SQ. FT.',city:'Glendale'},
{price:3800,location:'Los Angeles',type:'Hotel',
image:'https://i.pinimg.com/736x/ce/ef/aa/ceefaa5ef5eeefcceab4fbd46e5b5604--restaurant-interior-design-interior-design-offices.jpg',
size:'2060 SQ. FT.',city:'Santa Monica'},{price:2000,location:'Washington',type:'Hotel',
image:'https://blog.opentable.com/wp-content/uploads/sites/108/2017/01/Loosies-Kitchen-2.jpg',
size:'1200 SQ. FT.',city:'Seattle'},
{price:1500,location:'Washington',type:'Hotel',
image:'https://www.independent.ie/incoming/529d1/35100538.ece/AUTOCROP/w1240h700/9%20NEWS%20PL27909141Heron%20a.jpg',
size:'1300 SQ. FT.',city:'Olympia'},
{price:800,location:'Washington',type:'Hotel',
image:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/73105c63608955.5ab63a2a68f62.jpg',
size:'900 SQ. FT.',city:'Seattle'},
{price:4000,location:'Washington',type:'Hotel',
image:'https://images.affordableseating.net/dpr_1.0,f_auto,q_auto/afd/media/contenttype/working_with_small_dining_spaces.jpg',
size:'2100 SQ. FT.',city:'Spokane'},
{price:3800,location:'Washington',type:'Hotel',
image:'https://i0.wp.com/i.pinimg.com/originals/1f/7e/ac/1f7eac63b30bb0a852aa6a4cfb93dc1e.jpg?resize=650,400',
size:'2060 SQ. FT.',city:'Olympia'},
{price:2000,location:'Washington',type:'Office',
image:'https://stylesatlife.com/wp-content/uploads/2020/08/best-small-office-designs.jpg',
size:'800 SQ. FT.',city:'Seattle'},
{price:1500,location:'Washington',type:'Office',
image:'https://thearchitectsdiary.com/wp-content/uploads/2022/04/Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-For-Guest-Post-24-scaled.jpg',
size:'1080 SQ. FT.',city:'Olympia'},
{price:800,location:'Washington',type:'Office',
image:'https://5.imimg.com/data5/FN/AI/AJ/SELLER-33343279/small-office-interior-design-4--1000x1000.JPG',
size:'950 SQ. FT.',city:'Seattle'},
{price:4000,location:'Washington',type:'Office',
image:'https://www.blowingideas.com/wp-content/uploads/2022/05/Modern-Office-Design-Ideas-for-Small-Spaces.jpg',
size:'2130 SQ. FT.',city:'Tacoma'},
{price:3800,location:'Washington',type:'Office',
image:'https://thearchitectsdiary.com/wp-content/uploads/2019/09/Modern-Office-Interior-Design-Concepts-3.jpg',
size:'1600 SQ. FT.',city:'Spokane'},{price:2100,location:'Los Angeles',type:'Office',
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNHbzzBxHx9PU9LsxdBAwfk_nGu2f6_1nad9VPFhVMFUNGvLuyBmMEv1p7ULkYk_MK0c&usqp=CAU',
size:'800 SQ. FT.',city:'Lomita'},
{price:1300,location:'Los Angeles',type:'Office',
image:'https://5.imimg.com/data5/OO/LT/VG/SELLER-33343279/small-office-interior-design-500x500.jpeg',
size:'1000 SQ. FT.',city:'Lynwood'},
{price:850,location:'Los Angeles',type:'Office',
image:'https://www.startupguys.net/wp-content/uploads/2016/03/home-office-design-ideas-for-small-spaces-1024x768.jpg',
size:'700 SQ. FT.',city:'Arcadia'},
{price:4000,location:'Los Angeles',type:'Office',
image:'https://i0.wp.com/civillane.com/wp-content/uploads/2020/04/3D-Small-Office-Space-Interior-Design-2.jpg?ssl=1',
size:'2000 SQ. FT.',city:'Avalon'},
{price:3800,location:'Los Angeles',type:'Office',
image:'https://i.ytimg.com/vi/qPWeWeesYS0/maxresdefault.jpg',
size:'1800 SQ. FT.',city:'Bell'},{price:2200,location:'New York',type:'Office',
image:'https://lerablog.org/wp-content/uploads/2020/06/Tiny-Office-Space.jpg',
size:'727 SQ. FT.',city:'Albany'},
{price:1350,location:'New York',type:'Office',
image:'https://stylesatlife.com/wp-content/uploads/2020/11/Minimalistic-Small-Office-Design.jpg.webp',
size:'1077 SQ. FT.',city:'New Rochelle'},
{price:900,location:'New York',type:'Office',
image:'https://i.pinimg.com/originals/cf/7d/08/cf7d08c54fef566656c55571d7324f5e.jpg',
size:'720 SQ. FT.',city:'Syracuse'},
{price:3900,location:'New York',type:'Office',
image:'https://www.futuristarchitecture.com/wp-content/uploads/2022/02/modern-office-interior-1-768x512.jpg',
size:'2050 SQ. FT.',city:'Yonkers'},
{price:3200,location:'New York',type:'Office',
image:'https://www.thespruce.com/thmb/Hk1Ewe9-IUG8eL0V3noApRSWlUA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5951_201210_flanigan-2b12fcc3d93f43a1be909a9da1f1865d.jpg',
size:'1860 SQ. FT.',city:'Buffalo'}]

let initial=[]
for(let i=0;i<9;i++){
    let ind=Math.round(Math.random()*(l.length-1))
        if(initial.includes(l[ind])){
            i--
        }
        else{
            let addColor={color:'black',id:i,...l[ind]}
            initial.push(addColor)
        }
        
    
   
}

const init={start:initial,wishlist:[]}

const cards=createSlice(
    {
        name:'tile',
        initialState:init,
        reducers:{
            filtering(state,action){
                let location=action.payload[0]
                let price=action.payload[1]
                let type=action.payload[2]
                let arr=price.split('-')
                let min=Number(arr[0])
                let max=Number(arr[1])
                console.log('gett')
               state.start=l.filter(item=>((item.price>=min && item.price<=max)&& 
               item.location===location &&
               item.type===type
               ))
               
            },
            wish(state,action){
                
                
                if(state.start[action.payload[0]].color==='black'){
                    state.start[action.payload[0]].color='rgb(255, 0, 55)' 
                    state.wishlist=[...state.wishlist,state.start[action.payload[0]]] 
                    console.log(state.wishlist,'wishhhhh add')
                }
                else{
                    
                    state.start[action.payload[0]].color='black'
                    let ind=state.wishlist.findIndex(item=>item.id===action.payload[1])
                    state.wishlist.splice(ind,1)
                }
            },
            
                removewish(state,action){
                    let ind=state.wishlist.findIndex(item=>item.id===action.payload)
                    let colorchange=state.start.findIndex(item=>item.id===action.payload)
                    console.log(colorchange)
                    state.start[colorchange].color='black'
                    state.wishlist.splice(ind,1)
                }
        }
    }
)
export const {filtering,wish,removewish}=cards.actions
export default cards.reducer