// @flow
import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

import SectionHeader from "../widgets/section-header";

type Props = {
  title: string;
  description?: string;
  subtitle?: string;
  button?: React.ReactNode;
  showTitle?: boolean;
  showDescription?: boolean;
  showButton?: boolean;
  containerClassName?: string;
  showSubtitle?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
  className?: string;
  imgUrl: string;
  index: number;
};

export const OffersComponent = (props: Props) => {
  return (
    <div className={cn("flex w-full items-center gap-6", props.className)}>
      {/* Image Section  */}
      <div className="relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-[12px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
        <Image
          src={props.imgUrl}
          alt={props.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Text Section */}
      <div className="w-full">
        <SectionHeader
          containerClassName={props.containerClassName}
          title={props.title}
          description={props.description}
          button={props.button}
          showButton={props.showButton}
          showDescription={props.showDescription}
          showSubtitle={props.showSubtitle}
          showTitle={props.showTitle}
          titleClassName={props.titleClassName}
          subtitleClassName={props.subtitleClassName}
          subtitle={props.subtitle}
          descriptionClassName={props.descriptionClassName}
          buttonClassName={props.buttonClassName}
        />
      </div>
    </div>
  );
};
