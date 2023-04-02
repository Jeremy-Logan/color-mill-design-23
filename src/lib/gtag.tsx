
export const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GA_ID as string;


type EventParams = {
  action: string;
  category: string;
  label: string;
  value: number;
};


declare global {
  interface Window {
    gtag: (
      command: string,
      label: string,
      options?: Record<string, any>
    ) => void;
  }
}


export const pageview = (url: string): void => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};


export const event = ({ action, category, label, value }: EventParams): void => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
