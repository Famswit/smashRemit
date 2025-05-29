"use client";

import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { HeroSection } from "@/components/shared/hero";
import MaxWidthContainer from "@/components/shared/max-width-container";
import { OffersComponent } from "@/components/shared/offers-comp";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import SectionHeader from "@/components/widgets/section-header";
import { testimonials, whatWeOffer } from "@/config";
import AppleIcon from "@/icons/apple";
import PlayStoreIcon from "@/icons/left-left-icon";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MaxWidthContainer>
        <div className="space-y-10 px-4 md:px-0">
          <SectionHeader
            title="What we offer to our customers"
            titleClassName="!text-center w-full text-[#0991FF] font-bold text-3xl"
          />
          <div className="flex flex-col gap-10">
            {whatWeOffer.map((offer, index) => (
              <OffersComponent
                index={index}
                key={offer.title}
                imgUrl={offer.bgImage}
                title={offer.title}
                titleClassName="text-2xl md:text-4xl lg:text-5xl font-bold w-full max-w-[90%] md:max-w-[500px]"
                description={offer.description}
                descriptionClassName="text-lg font-normal w-full max-w-[90%] md:max-w-[300px] mt-3"
                className={`flex w-full flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 rounded-lg transition-all md:gap-10`}
                button={
                  <Button
                    variant={"outline"}
                    className="flex items-center gap-2 rounded-full border-[#FF7E32] text-[#FF7E32] transition-colors hover:bg-[#FF7E32] hover:text-white"
                  >
                    {offer.btnText}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                }
              />
            ))}
          </div>
        </div>
      </MaxWidthContainer>
      <MaxWidthContainer>
        <div className="grid grid-cols-1 overflow-hidden rounded-[32px] bg-white md:h-[459px] md:grid-cols-2">
          {/* Left Section */}
          <div className="order-2 flex flex-col justify-center bg-[#FF7F2A] px-6 py-10 md:order-1 md:px-16">
            <SectionHeader
              title="Grow Your Wealth Smartly"
              titleClassName="text-white text-3xl md:text-4xl font-bold leading-tight"
              description="Safe, flexible investments that fit your lifestyle. Earn up to 3.5% ROI with Full Transparency and Security"
              descriptionClassName="text-white text-base md:text-lg mt-4"
              button={
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-max rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#007AFF] transition-colors duration-300 hover:bg-gray-100"
                >
                  Invest Now
                </motion.button>
              }
            />
          </div>

          {/* Right Image Section */}
          <motion.div
            className="relative order-1 h-[300px] w-full overflow-hidden md:order-2 md:h-full"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src="/growWealth.png"
              alt="grow your wealth"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </MaxWidthContainer>
      <MaxWidthContainer>
        <div>
          <div className="relative mx-auto w-full max-w-full md:max-w-[1200px]">
            {/* Section Header */}
            <SectionHeader
              title="What Our Users Are Saying"
              description="Real stories from real people using SmashRemit around the world"
              titleClassName="text-center w-full text-[#0991FF] font-bold text-3xl"
              descriptionClassName="text-center w-full mt-2 mb-10"
            />

            {/* Carousel */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="mt-8 w-full px-8 sm:px-12 md:px-16 lg:px-20"
              orientation="horizontal"
            >
              <CarouselContent className="-ml-4 flex">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="flex basis-full justify-center sm:basis-[90%] md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-[227px] w-full rounded-xl p-2 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <CardHeader className="flex items-center gap-3 pb-2">
                        <Avatar className="h-10 w-10 transition-transform duration-300 hover:scale-110">
                          <AvatarImage src={testimonial.image} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <h2 className="font-semibold">{testimonial.name}</h2>
                          <p className="flex items-center gap-1 text-xs text-gray-500">
                            <span className="text-base">
                              {testimonial.flagEmoji}
                            </span>
                            {testimonial.country}
                          </p>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-1 text-sm text-gray-700">
                        <p className="line-clamp-3">
                          &quot;{testimonial.feedback}&quot;
                        </p>
                        <Badge className="mt-3 bg-blue-100 text-blue-600">
                          {testimonial.category}
                        </Badge>
                        <div className="mt-2 flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation */}
              <CarouselPrevious className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100" />
              <CarouselNext className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100" />
            </Carousel>
          </div>
        </div>
      </MaxWidthContainer>
      <MaxWidthContainer>
        <div className="grid h-auto grid-cols-1 gap-3 rounded-[32px] bg-[#0991FF] md:h-[541px] md:grid-cols-12">
          {/* Image Section */}
          <div className="xl:col-span-4.5 xs:py-10 relative order-1 col-span-5 mx-auto flex w-[60%] items-end py-10 sm:mx-auto sm:w-[60%] sm:py-8 md:order-2 md:h-full md:w-full md:py-0 lg:col-span-5 lg:py-12.5 lg:pr-10">
            <Image
              src="/iPhone15.png"
              width={420}
              height={867.75}
              alt="SmashRemit app"
              className="w-full object-contain p-4 pb-0 md:pb-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>

          {/* Text Section */}
          <div className="xs:px-10 xs:py-16 order-2 col-span-7 flex flex-col justify-center px-6 py-16 md:order-1 md:mt-20 lg:col-span-7 lg:mt-30 lg:w-[100%] lg:px-20 xl:col-span-7">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-3xl lg:text-5xl xl:text-5xl">
              About SmashRemit
            </h2>
            <p className="mt-4 pb-4 text-lg font-normal text-white md:pb-0 md:text-sm xl:text-lg">
              SmashRemit is a cutting-edge fintech platform designed to simplify
              financial transactions and empower users with seamless, secure,
              and efficient money management solutions. <br /> It offers a
              comprehensive range of services, including bill payments, money
              transfers, investments, and savings, all within a user-friendly
              digital ecosystem.
            </p>
            <motion.div
              className="xs:py-5 mt-4 flex flex-row justify-start gap-3 pt-4 pb-4 sm:mt-6 md:mt-10 md:justify-start md:pt-0 md:pb-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="https://play.google.com/store/apps" passHref>
                <div className="flex h-[43px] w-[130px] items-center gap-1 rounded-md bg-white p-2 text-black">
                  <PlayStoreIcon className="h-6 w-6" />
                  <div className="flex flex-col leading-none">
                    <span className="text-xs">Get it on</span>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </div>
              </Link>
              <Link href="https://www.apple.com/app-store/" passHref>
                <div className="flex h-[43px] w-[130px] items-center gap-1 rounded-md bg-white p-2 text-black">
                  <AppleIcon className="h-5 w-5" />
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px]">Download on the</span>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </MaxWidthContainer>
      <ScrollToTopButton />
    </>
  );
}
