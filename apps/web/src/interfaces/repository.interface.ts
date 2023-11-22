interface IRepository {
  id: number;
  html_url: string;
  full_name: string;
  avatar_url: string;
  description: string;
  language: string | null;
  updated_at: string;
}

export default IRepository;
