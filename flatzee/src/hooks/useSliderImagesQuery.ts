"use client";

import { useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/apiClient";

export const SLIDER_IMAGES_QUERY_KEY = ["sliderImages"];

export type SliderImage = {
  id: number;
  url: string;
  alt: string;
};

export const fetchSliderImages = async (): Promise<SliderImage[]> => {
  const { data } = await apiClient.get<SliderImage[]>("/sliderImages");
  return data;
};

export const useSliderImagesQuery = () =>
  useQuery({
    queryKey: SLIDER_IMAGES_QUERY_KEY,
    queryFn: fetchSliderImages,
  });
