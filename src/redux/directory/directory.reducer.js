const INITIAL_STATE ={
    sections : [
                 
        {
        title: 'Hats',
          imageUrl: 'https://i.ibb.co/tqwVgcr/Pexels-aman-jakhar-1124465.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'Jackets',
          imageUrl: 'https://i.ibb.co/rQ9kV6q/Amanda-vick-zw-oa-Dbfzy-E-unsplash.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'Sneakers',
          imageUrl: 'https://i.ibb.co/dKgr5mj/Wallpaper2you-281270.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'Women',
          imageUrl: 'https://i.ibb.co/7k5pXk2/Wallpaperflare-cropped.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'Men',
          imageUrl: 'https://i.ibb.co/Zzw3kgq/108-1089764-style-man-pic-hd.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      
     ]
};
const directoryReducer=(state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default directoryReducer;