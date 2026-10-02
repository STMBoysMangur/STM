import { useEffect, useMemo, useState } from "react";
import "./App.css";

// ==========================================
// GANESHOTSAV COUNTDOWN
// 4 September 2027 - 12:00 AM IST
// ==========================================
const ganeshDate = new Date("2027-09-04T00:00:00+05:30");

const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["events", "Events & Social Activities"],
  ["gallery", "Gallery"],
  ["contact", "Contact"],
];

const eventCards = [
  {
    title: "गणेशोत्सव २०२७",
    text: "भक्ती, सांस्कृतिक कार्यक्रम, आरती आणि गावातील एकत्रित सहभागाने उत्सव साजरा केला जाईल.",
  },
  {
    title: "सामाजिक उपक्रम",
    text: "गावातील गरजांनुसार स्वच्छता, मदतकार्य, जनजागृती आणि समाजोपयोगी कार्यक्रम.",
  },
  {
    title: "सांस्कृतिक कार्यक्रम",
    text: "परंपरा जपत मुलांना, तरुणांना आणि गावकऱ्यांना व्यासपीठ देणारे कार्यक्रम.",
  },
];

const galleryItems = [
  "गणेश मूर्ती सजावट",
  "आरती सोहळा",
  "सांस्कृतिक कार्यक्रम",
  "सामाजिक उपक्रम",
  "महाप्रसाद",
];

// ==========================================
// COUNTDOWN FUNCTION
// ==========================================
function getCountdown() {
  const diff = Math.max(ganeshDate.getTime() - Date.now(), 0);

  const days = Math.floor(
    diff / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (diff / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (diff / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (diff / 1000) % 60
  );

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

// ==========================================
// APP
// ==========================================
function App() {
  const [countdown, setCountdown] = useState(getCountdown);
  const [isLogoOpen, setIsLogoOpen] = useState(false);
  const [previewPhoto, setPreviewPhoto] = useState(null);

  // ========================================
  // COUNTDOWN LIVE UPDATE
  // ========================================
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownBlocks = useMemo(
    () => [
      ["दिवस", countdown.days],
      ["तास", countdown.hours],
      ["मिनिटे", countdown.minutes],
      ["सेकंद", countdown.seconds],
    ],
    [countdown]
  );

  return (
    <div className="site">

      {/* ======================================
          HEADER
      ====================================== */}

      <header className="topbar">

        <div className="brand" aria-label="Sangam Mandal Home">

          <button
            className="brand-mark"
            type="button"
            aria-label="Logo मोठा पहा"
            onClick={() => setIsLogoOpen(true)}
          >
            <img
              src={process.env.PUBLIC_URL + "/logo.jpeg"}
              alt="संगम चौक लोगो"
            />
          </button>

          <span>
            <strong>संगम चौक, मांगूर</strong>
          </span>

        </div>


        <nav className="nav" aria-label="Main navigation">

          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}

        </nav>

      </header>


      <main>

        {/* ======================================
            HOME
        ====================================== */}

        <section className="hero section" id="home">

          <div className="hero-content">

            <p className="eyebrow">
              संगम चौक मांगूर
            </p>

            <h1>
              संगम कला क्रीडा व सांस्कृतिक
              तरुण मंडळ (रजिस्टर)
            </h1>

            <p className="hero-text">
              गावातील तरुणांच्या सहभागातून स्थापन झालेले
              मंडळ, भक्ती, संस्कृती, क्रीडा आणि सामाजिक
              कार्याची परंपरा पुढे नेत आहे.
            </p>

            <div className="hero-actions">

              <a
                className="primary-btn"
                href="#events"
              >
                कार्यक्रम पहा
              </a>

              <a
                className="ghost-btn"
                href="https://www.instagram.com/sangam_chouk_1991__mangur_?igsh=d3cwcXc4eGc4ZWY%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <audio controls>
                <source
                  src={
                    process.env.PUBLIC_URL +
                    "/STMsong.mpeg"
                  }
                  type="audio/mpeg"
                />
              </audio>

            </div>

          </div>


          <div className="ganpati-photo-panel">

            <img
              src={
                process.env.PUBLIC_URL +
                "/ganpati.jpg"
              }
              alt="संगम चौक मांगूर गणपती"
            />

          </div>

        </section>


        {/* ======================================
            ABOUT
        ====================================== */}

        <section
          className="section about"
          id="about"
        >

          <div className="section-heading">

            <p className="eyebrow">
              About Mandal
            </p>

            <h2>
              स्थापना आणि ओळख
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-copy">

              <p>
                <strong>स्थापना:</strong> 2 ऑक्टोबर 1991
              </p>

              <p>
                मंडळाची स्थापना गावातील तरुणांच्या
                सहभागातून झाली. संगम चौक मांगूर येथे
                भक्ती, क्रीडा, संस्कृती आणि सामाजिक
                उपक्रमांसाठी मंडळ कार्यरत आहे.
                मंडळाचे 36 वे वर्ष. 
                गणपती बाप्पा मोरया.
                🌺 मंडळाची ओळख: गावातील तरुणांनी
                एकत्र येऊन भक्ती, संस्कृती आणि सामाजिक
                बांधिलकी जपण्यासाठी मंडळाची सुरुवात केली.
                दरवर्षी गणेशोत्सव मोठ्या उत्साहात आणि
                भक्तिमय वातावरणात साजरा केला जातो.
                गणेशोत्सवाबरोबरच विविध क्रीडा,
                सांस्कृतिक आणि सामाजिक उपक्रमांचे
                आयोजन केले जाते.
                मंडळाच्या माध्यमातून तरुणांना एकत्र
                आणणे आणि त्यांच्या कलागुणांना व्यासपीठ
                उपलब्ध करून देणे हा प्रमुख उद्देश आहे.
                समाजातील गरजू व्यक्तींना मदत करणे,
                सामाजिक जनजागृती करणे आणि एकोपा
                वाढवणे यासाठी मंडळ सदैव प्रयत्नशील आहे.
                अनेक वर्षांपासून मंडळाने परंपरा,
                संस्कृती आणि सामाजिक जबाबदारी यांचा
                सुंदर समतोल जपला आहे.
                आजही नव्या पिढीच्या सहभागातून मंडळाची
                वाटचाल उत्साहाने सुरू आहे.
                ✨ परंपरा जपत, संस्कृती जोपासत आणि
                समाजसेवेचा वसा पुढे नेत — संगम कला,
                क्रीडा व सांस्कृतिक तरुण मंडळाची
                अविरत वाटचाल सुरू आहे.
              </p>
              <p>
                मंडळाचे आधारस्तंभ -: कै. श्री. अशोक महादेव बोधले (तात्या)
              </p>

              <p>
                !! मांगुरचा मानाचा लालबाग !!
              </p>

              <p>
                गणपती बाप्पा मोरया! 🙏
                मंगलमूर्ती मोरया! 🌺
              </p>

              <p>
                प्रत्यक वर्षी sound लावणारे मंडळ.
                # विषय टॉपचा 👑🚀
              </p>


              {/* ====================================
                  COMMITTEE
              ==================================== */}

              <div className="committee-box">

                <h3>
                  मंडळाचे पदाधिकारी
                </h3><div className="committee-list">

                  <div className="committee-member">

                    <strong>
                      अध्यक्ष- 
                    </strong>

                    <span>
                      आदिनाथ पाटील
                    </span>

                  </div>


                  <div className="committee-member">

                    <strong>
                       उपाध्यक्ष- 
                    </strong>

                    <span>
                      प्रतीक स्वामी (महाराज)
                    </span>

                  </div>
                  <div className="committee-member">

                    <strong>
                       सेक्रेटरी -  
                    </strong>

                    <span>
                      प्रणव कोगनोळे
                    </span>

                  </div>
                   <div className="committee-member">

                    <strong>
                       खजिनदार -  
                    </strong>

                    <span>
                      सुमीत पाटील
                    </span>

                  </div>


                </div>

              </div>

            </div>


            {/* ====================================
                COUNTDOWN
            ==================================== */}

            <div
              className="festival-panel about-countdown"
              aria-label="Ganeshotsav countdown"
            >

              <div className="countdown-title">

                <span>
                  गणेशोत्सव Countdown
                </span>

                <strong>
                  ४ सप्टेंबर २०२७
                </strong>

              </div>


              <div className="countdown-grid">

                {countdownBlocks.map(
                  ([label, value]) => (

                    <div
                      className="count-box"
                      key={label}
                    >

                      <strong>
                        {String(value).padStart(
                          2,
                          "0"
                        )}
                      </strong>

                      <span>
                        {label}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </section>


        {/* ======================================
            EVENTS
        ====================================== */}

        <section
          className="section events"
          id="events"
        >

          <div className="section-heading">

            <p className="eyebrow">
              Events & Social Activities
            </p>

            <h2>
              उत्सव आणि समाजकार्य
            </h2>

          </div>


          <div className="event-grid">

            {eventCards.map((event) => (

              <article
                className="event-card"
                key={event.title}
              >

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.text}
                </p>

              </article>

            ))}

          </div>


          <div className="aarti-band">

            <div>

              <h3>
                आरती वेळ
              </h3>

              <p>
                गणेश चतुर्थी आरती:
                गणेश चतुर्थी चे 9 दिवास
                सायंकाळी 8 वाजता
              </p>

              <p>
                संकष्टी चतुर्थी आरती:
                चंद्रोदयाच्या वेळी
              </p>

            </div>


            <div>

              <h3>
                महाप्रसाद
              </h3>

              <p>
                महाप्रसादाची माहिती लवकरच
                जाहीर केली जाईल.
              </p>

            </div>

          </div>

        </section>


        {/* ======================================
            GALLERY
        ====================================== */}

        <section
          className="section gallery"
          id="gallery"
        >

          <div className="section-heading">

            <p className="eyebrow">
              Gallery Photos / Videos
            </p>

            <h2>
              क्षणचित्रे
            </h2>

          </div>

<div className="gallery-feature">
            <div className="gallery-feature-heading">
              <span>आठवण</span>
              <strong>Photos</strong>
            </div>
            <div className="mahaprasad-photo-grid">
              {[
                [process.env.PUBLIC_URL + "/2026/Tatay.jpeg", "आठवण"],
  ].map(([src, alt]) => (
                <button
                  className="photo-button"
                  type="button"
                  key={src}
                  onClick={() => setPreviewPhoto({ src, alt })}
                >
                  <img src={src} alt={alt} />
                </button>
              ))}
            </div>
            <div className="aarti-video-card">
              <video controls preload="metadata">
                <source src={process.env.PUBLIC_URL + "/2026/athavn.mp4"} type="video/mp4" />
              </video>
            </div>

          </div>



          {/* GANESH MURTI */}

          <div className="gallery-feature">

            <div className="gallery-feature-heading">

              <span>
                गणेश मूर्ती सजावट
              </span>

              <strong>
                Photos / Video
              </strong>

            </div>


            <div className="ganesh-murti-photo-grid">

              {[
                [
                  process.env.PUBLIC_URL +
                    "/ganesh-murti-1.jpeg",
                  "गणेश मूर्ती सजावट फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/ganesh-murti-2.jpeg",
                  "गणेश मूर्ती दर्शन फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/ganesh-murti-3.jpeg",
                  "गणेश मूर्ती जवळचा फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/ganesh-murti-4.jpg",
                  "गणपती दर्शन फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/ganesh-murti-5.jpg",
                  "गणपती सजावट फोटो",
                ],
              ].map(([src, alt]) => (

                <button
                  className="photo-button"
                  type="button"
                  key={src}
                  onClick={() =>
                    setPreviewPhoto({
                      src,
                      alt,
                    })
                  }
                >

                  <img
                    src={src}
                    alt={alt}
                  />

                </button>

              ))}

            </div>


            <div className="aarti-video-card">

              <video
                controls
                preload="metadata"
              >

                <source
                  src={
                    process.env.PUBLIC_URL +
                    "/ganesh-murti-video.mp4"
                  }
                  type="video/mp4"
                />

                तुमच्या browser मध्ये video
                support नाही.

              </video>

            </div>


            <div className="aarti-video-card">

              <video
                controls
                preload="metadata"
              >

                <source
                  src={
                    process.env.PUBLIC_URL +
                    "/ganesh-murti-video-2.mp4"
                  }
                  type="video/mp4"
                />

                तुमच्या browser मध्ये video
                support नाही.

              </video>

            </div>

          </div>


          {/* AGAMAN */}

          <div className="gallery-feature">

            <div className="gallery-feature-heading">

              <span>
                आगमन सोहळा
              </span>

              <strong>
                Photos
              </strong>

            </div>


            <div className="agaman-photo-grid">

              {[
                [
                  process.env.PUBLIC_URL +
                    "/agaman-1.jpg",
                  "आगमन सोहळा फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/agaman-2.jpg",
                  "गणपती आगमन फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/agaman-3.jpg",
                  "आगमन मिरवणूक फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/agaman-4.jpg",
                  "गणपती आगमन मंडळ फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/agaman-5.jpg",
                  "गणपती आगमन दर्शन फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/agaman-6.jpeg",
                  "आगमन सोहळा स्टेज फोटो",
                ],
              ].map(([src, alt]) => (

                <button
                  className="photo-button"
                  type="button"
                  key={src}
                  onClick={() =>
                    setPreviewPhoto({
                      src,
                      alt,
                    })
                  }
                >

                  <img
                    src={src}
                    alt={alt}
                  />

                </button>

              ))}

            </div>

          </div>


          {/* VISARJAN */}

          <div className="gallery-feature">

            <div className="gallery-feature-heading">

              <span>
                विसर्जन मिरवणूक सोहळा
              </span>

              <strong>
                Photos / Videos
              </strong>

            </div>


            <div className="visarjan-photo-grid">

              {[
                [
                  process.env.PUBLIC_URL +
                    "/visarjan-1.jpeg",
                  "विसर्जन मिरवणूक फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/visarjan-2.jpeg",
                  "विसर्जन साऊंड फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/visarjan-3.jpg",
                  "विसर्जन साऊंड सजावट फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/visarjan-4.jpg",
                  "विसर्जन रात्रीचा सोहळा फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/visarjan-5.jpg",
                  "विसर्जन गणपती दर्शन फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/visarjan-6.jpg",
                  "विसर्जन गणपती जवळचा फोटो",
                ],
              ].map(([src, alt]) => (

                <button
                  className="photo-button"
                  type="button"
                  key={src}
                  onClick={() =>
                    setPreviewPhoto({
                      src,
                      alt,
                    })
                  }
                >

                  <img
                    src={src}
                    alt={alt}
                  />

                </button>

              ))}

            </div>


            <div className="video-grid">

              <div className="aarti-video-card">

                <video
                  controls
                  preload="metadata"
                >

                  <source
                    src={
                      process.env.PUBLIC_URL +
                      "/visarjan-video-1.mp4"
                    }
                    type="video/mp4"
                  />

                  तुमच्या browser मध्ये video
                  support नाही.

                </video>

              </div>


              <div className="aarti-video-card">

                <video
                  controls
                  preload="metadata"
                >

                  <source
                    src={
                      process.env.PUBLIC_URL +
                      "/visarjan-video-2.mp4"
                    }
                    type="video/mp4"
                  />

                  तुमच्या browser मध्ये video
                  support नाही.

                </video>

              </div>

            </div>

          </div>


          {/* AARTI */}

          <div className="gallery-feature">

            <div className="gallery-feature-heading">

              <span>
                आरती सोहळा
              </span>

              <strong>
                Photos
              </strong>

            </div>


            <div className="gallery-photo-grid">

              {[
                [
                  process.env.PUBLIC_URL +
                    "/aarti-1.jpeg",
                  "आरती सोहळा फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/aarti-2.jpeg",
                  "गणपती आरती सजावट फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/aarti-3.jpg",
                  "आरती सोहळा मंडप फोटो",
                ],
              ].map(([src, alt]) => (

                <button
                  className="photo-button"
                  type="button"
                  key={src}
                  onClick={() =>
                    setPreviewPhoto({
                      src,
                      alt,
                    })
                  }
                >

                  <img
                    src={src}
                    alt={alt}
                  />

                </button>

              ))}

            </div>


            <div className="aarti-video-card">

              <video
                controls
                preload="metadata"
              >

                <source
                  src={
                    process.env.PUBLIC_URL +
                    "/aarti-video.mp4"
                  }
                  type="video/mp4"
                />

                तुमच्या browser मध्ये video
                support नाही.

              </video>

            </div>

          </div>


          {/* MAHAPRASAD */}

          <div className="gallery-feature">

            <div className="gallery-feature-heading">

              <span>
                महाप्रसाद
              </span>

              <strong>
                Photos
              </strong>

            </div>


            <div className="mahaprasad-photo-grid">

              {[
                [
                  process.env.PUBLIC_URL +
                    "/mahaprasad-1.jpeg",
                  "महाप्रसाद वितरण फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/mahaprasad-2.jpeg",
                  "महाप्रसाद सेवा फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/mahaprasad-3.jpeg",
                  "महाप्रसाद भोजन फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/mahaprasad-4.jpeg",
                  "महाप्रसाद मंडळ फोटो",
                ],
                [
                  process.env.PUBLIC_URL +
                    "/mahaprasad-5.jpeg",
                  "महाप्रसाद सोहळा फोटो",
                ],
              ].map(([src, alt]) => (

                <button
                  className="photo-button"
                  type="button"
                  key={src}
                  onClick={() =>
                    setPreviewPhoto({
                      src,
                      alt,
                    })
                  }
                >

                  <img
                    src={src}
                    alt={alt}
                  />

                </button>

              ))}

            </div>

          </div>

        </section>


        {/* ======================================
            CONTACT
        ====================================== */}

        <section
          className="section contact"
          id="contact"
        >

          <div className="contact-panel">

            <div>

              <p className="eyebrow">
                Contact
              </p>

              <h2>
                संपर्क व पत्ता
              </h2>

              <p>
                <strong>
                  संगम कला क्रीडा व सांस्कृतिक
                  तरुण मंडळ
                </strong>
              </p>

              <p>
                संगम चौक, मांगूर, कर्नाटक
              </p>

            </div>


            <a
              className="instagram-card"
              href="https://www.instagram.com/sangam_chouk_1991__mangur_?igsh=d3cwcXc4eGc4ZWY%3D"
              target="_blank"
              rel="noreferrer"
            >

              <span>
                Instagram
              </span>

              <strong>
                @sangam_chouk_1991_mangur_
              </strong>

            </a>

          </div>

        </section>

      </main>


      {/* ======================================
          FOOTER
      ====================================== */}

      <footer className="footer">

        <p>
          © २०२६ संगम कला क्रीडा व सांस्कृतिक
          तरुण मंडळ, मांगूर.
        </p>

      </footer>


      {/* ======================================
          LOGO LIGHTBOX
      ====================================== */}

      {isLogoOpen && (

        <div
          className="logo-lightbox"
          onClick={() => setIsLogoOpen(false)}
        >

          <button
            className="logo-close"
            type="button"
            aria-label="Close logo preview"
            onClick={() => setIsLogoOpen(false)}
          >
            ×
          </button>

          <img
            src={
              process.env.PUBLIC_URL +
              "/logo.jpeg"
            }
            alt="संगम चौक लोगो मोठा"
            onClick={(event) =>
              event.stopPropagation()
            }
          />

        </div>

      )}


      {/* ======================================
          PHOTO LIGHTBOX
      ====================================== */}

      {previewPhoto && (

        <div
          className="logo-lightbox"
          onClick={() => setPreviewPhoto(null)}
        >

          <button
            className="logo-close"
            type="button"
            aria-label="Close photo preview"
            onClick={() => setPreviewPhoto(null)}
          >
            ×
          </button>

          <img
            src={previewPhoto.src}
            alt={previewPhoto.alt}
            onClick={(event) =>
              event.stopPropagation()
            }
          />

        </div>

      )}

    </div>
  );
}

export default App;