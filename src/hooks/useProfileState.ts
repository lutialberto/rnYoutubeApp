import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export interface IProfileState {
  profileImageUrl: string;
  name: string;
}

export const useProfileState = create<IProfileState>()(
  persist(
    () => ({
      profileImageUrl:
        'https://media.licdn.com/dms/image/C4E03AQEqdOBhcFBsZg/profile-displayphoto-shrink_800_800/0/1584059464776?e=2147483647&v=beta&t=LRRzF8uzvPW6-GajtI4c_upG5bG96Kl7Cit4Wf7PJ6Q',
      name: 'El canal de Beto',
    }),
    {
      name: 'profile-storage',
    },
  ),
);
