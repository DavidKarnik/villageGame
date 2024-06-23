export interface Village {
  id: number;
  type: string;  // Typ vesnice (hráč/barbar)
  owner: string; // Majitel vesnice
  name: string;  // Název vesnice
  points: number; // Body vesnice
  position: { x: number; y: number }; // Pozice vesnice na mapě
}
