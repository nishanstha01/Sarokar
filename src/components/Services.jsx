import React from "react";
import Section from "./Section";
import { useActionData } from "react-router-dom";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import news from "./design/news.jpg";
import classroom from "./design/croom.jpg";
import pp from "./design/pp.jpg";
import study from "./design/study.jpg";
import book from "./design/book.jpg";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import FadeInSection from "./design/fadeinsection";

const Services = () => {
  return (
    <Section id="how-to-use">
      <FadeInSection>
        <div className="container">
          <Heading title="Website made for knowledge" text="" />
          <div className="relative">
            <FadeInSection>
              <div
                className="relative z-1 flex items-center h-[39rem] mb-5
                  p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20
                  xl:h-[46rem]"
              >
                <div
                  className="absolute top-0 left-0 w-full h-full 
                pointer-events-none md:w-3/5 xl:w-auto"
                >
                  <img
                    className="w-full h-full object-cover md:object-right"
                    width={800}
                    height={730}
                    alt="Smart"
                    src={news}
                  />
                </div>
                <div className="relative z-1 max-w-[17rem] ml-auto">
                  <h4 className="h4 mb-4">Latest News</h4>
                  <p className="body-2 mb-[3rem] text-n-3">
                    Get Access To New Informations ASAP!
                  </p>
                  <ul className="body-2">
                    {brainwaveServices.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start py-4 border-t border-n-6"
                      >
                        <img width={24} height={24} src={check} alt="lol" />
                        <p className="ml-4">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
            <div className="relative z-1 grid gap-5 lg:grid-cols-2">
              <FadeInSection>
                <div
                  className="relative min-h-[39rem] border border-n-1/10
                    rounded-3xl overflow-hidden"
                >
                  <div className="absolute inset-0">
                    <img
                      src={classroom}
                      className="h-full w-full object-cover"
                      width={630}
                      height={750}
                      alt="robot"
                    />
                  </div>
                  <div
                    className="absolute inset-0 flex flex-col justify-end
                      p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15"
                  >
                    <h4 className="h4 mb-4">Recorded Class Videos</h4>
                    <p className="body-2 mb-[3rem] text-n-3">
                      You can access all the class recorded videos by clicking
                      the button.
                    </p>
                  </div>
                  <PhotoChatMessage />
                </div>
              </FadeInSection>

              <FadeInSection>
                <div
                  className="p-4 bg-n-7 rounded-3xl overflow-hidden 
                    lg:min-h-[46rem]"
                >
                  <div
                    className="relative h-[20rem] bg-n-8 rounded-xl
                  overflow-hidden md mb-4"
                  >
                    <img
                      src={study}
                      className="w-full h-full object-cover"
                      width={520}
                      height={400}
                      alt="Scary robot"
                    />
                    <VideoChatMessage />
                    <VideoBar />
                  </div>
                  <div
                    className="relative h-[30rem] bg-n-8 rounded-xl
                  overflow-hidden md "
                  >
                    <img
                      src={book}
                      className="w-full h-full object-cover rounded-3xl object-fill"
                      width={520}
                      height={400}
                      alt="Scary robot"
                    />
                  </div>
                </div>
              </FadeInSection>
            </div>
            <Gradient />
          </div>
        </div>
      </FadeInSection>
    </Section>
  );
};

export default Services;
