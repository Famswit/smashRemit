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
  const rowClass = props.index % 2 === 1 ? "flex-row-reverse" : "";

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-6",
        rowClass,
        props.className
      )}
    >
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
      <div className="relative h-[523px] w-full rounded-[12px]">
        <Image
          src={props.imgUrl}
          fill
          alt={props.title}
          className="rounded-[12px] object-cover"
        />
      </div>
    </div>
  );
};
