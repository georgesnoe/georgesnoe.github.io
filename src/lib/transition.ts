/** Payload for the "card flies into the page" shared-element illusion. */
export interface FlightPayload {
  kind: "blog"
  title: string
  description: string
  date: string
  rect: { top: number; left: number; width: number; height: number }
}

export type FlightRequest = Omit<FlightPayload, "rect"> & {
  rect?: FlightPayload["rect"]
}
