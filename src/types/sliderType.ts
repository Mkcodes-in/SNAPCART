export interface sliderProps {
    images: string[];
}

export interface slide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    buttonText: string;
    color: string;
}

type normalise = Partial<slide>;

export interface SlidesProps {
    slides: normalise[];
}

export interface imageProps {
    url: string[];
}
