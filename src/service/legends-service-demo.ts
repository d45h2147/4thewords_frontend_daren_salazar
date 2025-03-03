import { z } from "zod";
import { Category, Province, Canton, District, Legend, type LegendDto } from "@/schemas/legends";

export function useLegendsDemo() {
  const fetchLegends = async (): Promise<Legend[]> => {
    const legendsData = await fetch("/demo/data/legends.json", {
      headers: { "Cache-Control": "no-cache" },
    });

    const data = await legendsData.json();
    return new Promise((resolve) => {
      setTimeout(async () => {
        const result = z.array(Legend).safeParse(data);
        if (result.success) {
          resolve(result.data);
        } else {
          console.log(result);
          resolve([]);
        }
      }, 500);
    });
  };

  const createLegend = async (id: string, legend: Omit<LegendDto, "id">, file?: File): Promise<Legend | null> =>
    Promise.resolve(null);
  const updateLegend = async (id: string, legend: Partial<LegendDto>, file?: File): Promise<Legend | null> =>
    Promise.resolve(null);
  const deleteLegend = async (id: string): Promise<boolean | null> => Promise.resolve(null);

  return { fetchLegends, createLegend, updateLegend, deleteLegend };
}

export function useListForFiltersDemo() {
  const fetchListOfCategories = async (): Promise<Category[]> => {
    const legendsData = await fetch("/demo/data/list-of-categories.json", {
      headers: { "Cache-Control": "no-cache" },
    });

    return new Promise((resolve) => {
      setTimeout(() => resolve(legendsData.json()), 500);
    });
  };

  const fetchListOfProvinces = async (): Promise<Province[]> => {
    const legendsData = await fetch("/demo/data/list-of-province.json", {
      headers: { "Cache-Control": "no-cache" },
    });

    return new Promise((resolve) => {
      setTimeout(() => resolve(legendsData.json()), 500);
    });
  };

  const fetchListOfCantons = async (): Promise<Canton[]> => {
    const legendsData = await fetch("/demo/data/list-of-canton.json", {
      headers: { "Cache-Control": "no-cache" },
    });

    return new Promise((resolve) => {
      setTimeout(() => resolve(legendsData.json()), 500);
    });
  };

  const fetchListOfDistricts = async (): Promise<District[]> => {
    const legendsData = await fetch("/demo/data/list-of-district.json", {
      headers: { "Cache-Control": "no-cache" },
    });

    return new Promise((resolve) => {
      setTimeout(() => resolve(legendsData.json()), 500);
    });
  };

  return { fetchListOfCategories, fetchListOfDistricts, fetchListOfCantons, fetchListOfProvinces };
}
