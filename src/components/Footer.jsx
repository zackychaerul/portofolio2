const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-7">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#proyek">Proyek</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="">
          <i className="ri-reddit-fill ri-2x"></i>
        </a>
        <a href="">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
