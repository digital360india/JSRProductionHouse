import React from "react";

const Team = () => {
  return (
    <div>
      <>
        <div className="bg-black p-5 md:p-12 px-6 h-full w-[100%] text-white ">
          <div className="flex flex-col lg:flex-row pb-10 lg:pb-40">
            <img
              src="https://cdn.discordapp.com/attachments/1078905801017659432/1099956366891831397/Tarun.png"
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] object-contain"
              data-aos="fade-up"
            />
            <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                PRE-PRODUCTION
              </h1>
              <p className="font2 opacity-40 pb-4">
                Pre-production is an essential part of the filmmaking process at
                our production house. It is during this phase that we
                meticulously plan, coordinate, and prepare for every aspect of
                the project to ensure its success.
              </p>
              <ul className="font2 flex flex-col gap-2">
                <li>Story and Scriptwriting</li>
                <li className="opacity-40">
                  Have a story concept but are unsure about how to present it on
                  screen? Don’t worry, we have your back. With our storytelling,
                  your story will make people all the emotions you wanna portray
                  and jump out of their seats with excitement.
                </li>
                <li>Screenplay</li>
                <li className="opacity-40">
                  Professional screenwriters will work with you every step of
                  the way, from dialogue, scenes, and sequences to execution
                  strategy, until your vision becomes a reality!
                </li>
                <li>Storyboarding</li>
                <li className="opacity-40">
                  Get a close look at your work through a storyboard made for
                  your script, which includes a shot-by-shot sequence,
                  placements, and direction elements: a visual representation of
                  your story plan.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row  pb-10 lg:pb-40">
            <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl  pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                PRODUCTION
              </h1>
              <p className="font2 opacity-40 pb-4">
                During production, we provide comprehensive support, including
                camera operation, lighting, sound recording, and on-set
                coordination.
              </p>
              <ul className="font2 flex flex-col gap-2">
                <li>Filming</li>
                <li className="opacity-40">
                  We specialize in producing and directing award-winning films.
                  Our outstanding team will work and bring your story to life in
                  the most beautiful way!
                </li>
                <li>Commercial Advertisement</li>
                <li className="opacity-40">
                  With us, you will receive the most effective and visually
                  appealing advertisements that represent your brand and its
                  goals to the maximum extent—ads that are powerful and
                  unforgettable!
                </li>
                <li>Music Album</li>
                <li className="opacity-40">
                  If you are looking for a highly professional yet affordable
                  voice recording studio, look no further. We’re here to help
                  you with everything from the production of music to creating
                  the best music videos for your songs.
                </li>
              </ul>
            </div>
            <img
              src="https://cdn.discordapp.com/attachments/1078905801017659432/1099956366673723402/Prashil.png"
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20 object-contain "
              data-aos="fade-up"
            />
          </div>

          <div className="flex flex-col lg:flex-row pt-5 lg:pb-40">
            <img
              src="https://cdn.discordapp.com/attachments/1078905801017659432/1099956366426255370/Meedhya.png"
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] object-contain"
              data-aos="fade-up"
            />
            <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-10 leading-0 w-[320px] md:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                AUDIO-RODUCTION
              </h1>
              <p className="font2 opacity-40 pb-4">
                Finally, we offer audio production services, including music
                composition, sound design, and voice-over recording, to ensure
                that the final product has high-quality sound.
              </p>
              <ul className="font2 flex flex-col gap-2">
                <li>Music Production</li>
                <li className="opacity-40">
                  We can help you compose your music and lyrics with our team of
                  efficient composers and songwriters with years of industry
                  experience.
                </li>
                <li>Dubbing & Bg Score</li>
                <li className="opacity-40">
                  Create a professional mix with our sound engineers and
                  equipment. We can create a perfect music mix for you that will
                  go well with your song.
                </li>
                <li>Dubbing & Bg Score</li>
                <li className="opacity-40">
                  Create a memorable background score that reflects your
                  storyline and makes your audience want to watch more.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Team;
