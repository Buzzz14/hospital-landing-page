"use client";

import { useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/apiClient";

export type Contact = {
  phone: string;
  whatsapp: string;
  logo: string;
  email: string;
  location: string;
};

export const CONTACT_QUERY_KEY = ["contact"];

export const fetchContact = async (): Promise<Contact> => {
  const { data } = await apiClient.get<Contact>("/contact");
  return data;
};

export const useContactQuery = () =>
  useQuery({
    queryKey: CONTACT_QUERY_KEY,
    queryFn: fetchContact,
  });
