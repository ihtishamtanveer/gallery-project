import PhotoAlbum from 'react-photo-album';
import './App.css';

function App() {
  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 800,
      height: 600
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1600,
      height: 900
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 800,
      height: 600
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 1600,
      height: 900
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 800,
      height: 600
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 1600,
      height: 900
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 800,
      height: 600
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 1600,
      height: 900
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 800,
      height: 600
    }
  ];

  // const photos = [
  //   {
  //     src: 'https://t3.ftcdn.net/jpg/05/73/95/90/360_F_573959050_BXeecXwfgIlMFGdOfHRiSdedBealWU5Q.jpg',
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: 'https://cutewallpaper.org/28/colorful-wallpaper-for-desktop/dark-colorful-wallpapers-wallpapers-most-popular-dark-colorful-wallpapers-backgrounds-browsecatnet.png',
  //     width: 1600,
  //     height: 900
  //   },
  //   {
  //     src: 'https://t3.ftcdn.net/jpg/05/73/95/90/360_F_573959050_BXeecXwfgIlMFGdOfHRiSdedBealWU5Q.jpg',
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: 'https://cutewallpaper.org/28/colorful-wallpaper-for-desktop/dark-colorful-wallpapers-wallpapers-most-popular-dark-colorful-wallpapers-backgrounds-browsecatnet.png',
  //     width: 1600,
  //     height: 900
  //   },
  //   {
  //     src: 'https://t3.ftcdn.net/jpg/05/73/95/90/360_F_573959050_BXeecXwfgIlMFGdOfHRiSdedBealWU5Q.jpg',
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: 'https://cutewallpaper.org/28/colorful-wallpaper-for-desktop/dark-colorful-wallpapers-wallpapers-most-popular-dark-colorful-wallpapers-backgrounds-browsecatnet.png',
  //     width: 1600,
  //     height: 900
  //   },
  //   {
  //     src: 'https://t3.ftcdn.net/jpg/05/73/95/90/360_F_573959050_BXeecXwfgIlMFGdOfHRiSdedBealWU5Q.jpg',
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: 'https://cutewallpaper.org/28/colorful-wallpaper-for-desktop/dark-colorful-wallpapers-wallpapers-most-popular-dark-colorful-wallpapers-backgrounds-browsecatnet.png',
  //     width: 1600,
  //     height: 900
  //   },
  //   {
  //     src: 'https://t3.ftcdn.net/jpg/05/73/95/90/360_F_573959050_BXeecXwfgIlMFGdOfHRiSdedBealWU5Q.jpg',
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: 'https://cutewallpaper.org/28/colorful-wallpaper-for-desktop/dark-colorful-wallpapers-wallpapers-most-popular-dark-colorful-wallpapers-backgrounds-browsecatnet.png',
  //     width: 1600,
  //     height: 900
  //   }
  // ];
  
  return (
    <>
      <div className='gZyJMi'>
        <section className="flex shrink-0 flex-col justify-between pb-1.5 md:flex-row">
            <div className="sc-bcXHqe Efjeb">
              <div className="flex flex-1" style={{ maxWidth: '650px' }}>
                <h1
                  className="my-[6px] mr-4 break-words text-24 font-semibold text-pigeon-700"
                  data-disableselect="true"
                  data-testid="BOARD_BLURB_TITLE"
                >
                  Air Branded Boards
                </h1>
              </div>
              <div className="min-w-[240px]" style={{ maxWidth: '650px' }}>
                <p
                  data-testid="BOARD_BLURB_DESCRIPTION"
                  data-disableselect="true"
                  className="mt-1 whitespace-pre-wrap break-words text-14 text-pigeon-500"
                >
                  With a bunch of stock photos!
                </p>
              </div>
            </div>
        </section>
        <hr className='mt-5 pb-5'/>
        <div className='title-upper'>
          <button type='button'>
            <div className='title'>
              Boards (4)
            </div>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 pb-10">
          {[1,2,3,4,5,6,7].map(() => (
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p>Do you want to get notified when a new component is added to Flowbite?</p>
            </figcaption>
          </figure>
          ))}
          
        </div>
        <div>
          <PhotoAlbum layout="rows" photos={photos} />
        </div>
      </div>
    {/* <Gallery photos={photos} onClick={openLightbox} /> */}
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    {/* <Gallery {...{images, widths, ratios}} /> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
