"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Descubre nuestro catálogo",
  demoUrl = "https://www.shadcnblocks.com",
  items = [
    {
      id: "item-1",
      title: "The Rider Residences",
      summary:
        "The Rider Residences Miami is an avant-garde condominium developed by the Miami-based Rilea Group, is poised to redefine luxury living in Miami’s most vibrant district. This 12-story boutique building features 146 turnkey units, uniquely blending high-end living and rock-n-roll heritage. The Rider at Wynwood is not just a residence; it’s a testament to its neighborhood’s freedom and rebellious spirit.",
      url: "https://designer.inmersial.com.ar/player/7edcf188-92d6-4f3f-8c64-1001ad7ef813",
      image: "http://griftin.com.ar/wp-content/uploads/2025/05/proyectos-theriders.jpg",
    },
    {
      id: "item-2",
      title: "Optimar, Miami - Collins Ave 15811-Apt 603",
      summary:
        "Descubre tu futuro hogar en Miami con nuestro recorrido inmersivo 360° de Optimar y su increíble vista al mar. Explora cada rincón, desde la comodidad de tu dispositivo. ¡Haz clic y comienza la experiencia!",
      url: "https://designer.inmersial.com.ar/player/5a6e0ee1-159a-4834-a93a-87ab82f68d6d",
      image: "http://griftin.com.ar/wp-content/uploads/2025/04/proyectos-Optimar.jpg",
    },
    {
      id: "item-3",
      title: "STARTUP OLÉ MIAMI'25",
      summary:
        "STARTUP OLÉ MIAMI'25 THE ARGEST TECH EVENT",
      url: "https://designer.inmersial.com.ar/player/1I7u65ZjsB2kp8kBN45Nn_Bx1LRZCPeq8",
      image: "http://griftin.com.ar/wp-content/uploads/2025/03/slider-2-servicio.jpeg",
    },
    {
      id: "item-4",
      title: "AGN Desarrollo y Arquitectura – AIRES DEL CERRO - 1 Dormitorio",
      summary:
        "Descubre la armonía entre naturaleza y diseño en este departamento de 1 dormitorio en AIRES DEL CERRO. Este recorrido 360° te invita a explorar un espacio pensado para quienes buscan un estilo de vida relajado y conectado con el entorno",
      url: "#",
      image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-5",
      title: "AGN Desarrollo y Arquitectura – TORRE ALBERDI - avance de obra - julio 2024",
      summary:
        "Acompáñanos en esta exclusiva recorrida de obra de TORRE ALBERDI. Este recorrido 360° te ofrece una visión detallada del progreso, la calidad y la dedicación que estamos invirtiendo en la construcción de tu futuro hogar",
      url: "https://designer.inmersial.com.ar/player/1qGjbzBZYtVwzWxe8UxiximUt6pip59Ci",
      image: "http://griftin.com.ar/wp-content/uploads/2025/03/ObraTorreAlberdi-proyecto.jpg",
    },
  ],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  const { t } = useTranslation();

  return (
    
    <section className="py-32">
      <div className="container ">
        
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16 ">
          <div>
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {t('gallery_heading')}
            </h2>
            <a
              href={demoUrl}
              className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg"
            >
              {t('gallery_see_all')}
              </a>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[1300px] justify-center align-middle mx-auto">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative left-[-1rem]"
        >
          <CarouselContent className="-mr-4 ml-8 2xl:mr-[max(0rem,calc(50vw-700px-1rem))] 2xl:ml-[max(8rem,calc(50vw-700px+1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[452px]">
                <a
                  href={item.url}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 pt-4 text-lg font-medium break-words md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                  <div className="flex items-center text-sm">
                   {t('gallery_see_experience')}{" "}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery6 ;
