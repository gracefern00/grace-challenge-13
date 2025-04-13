// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
  id: number;
  name: string;
  login: string; // GitHub username
  location: string | null;
  avatar_url: string;
  email: string | null;
  html_url: string;
  company: string | null;
  bio?: string;
}