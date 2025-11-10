"use client";

import { useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/apiClient";

export type Service = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const SERVICES_QUERY_KEY = ["services"];

export const fetchServices = async (): Promise<Service[]> => {
  const { data } = await apiClient.get<Service[]>("/services");
  return data;
};

export const useServicesQuery = () =>
  useQuery({
    queryKey: SERVICES_QUERY_KEY,
    queryFn: fetchServices,
  });
