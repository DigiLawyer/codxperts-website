import { uploadedAssets } from './uploaded-assets';

export interface TeamMember {
  name: string;
  linkedin: string;
  photo: string;
  website?: string;
}

export interface TeamSection {
  title: string;
  members: TeamMember[];
}

const team = uploadedAssets.team;

export const teamSections: TeamSection[] = [
  {
    title: 'Business Side',
    members: [
      {
        name: 'Danish Ghaffar',
        linkedin: 'https://www.linkedin.com/in/danish-ghaffar-96b992220/',
        photo: team.danishGhaffar,
      },
      {
        name: 'Taimoor Hashim',
        linkedin: 'https://www.linkedin.com/in/taimoor-hashim-23757a1b8/',
        photo: team.taimoorHashim,
      },
    ],
  },
  {
    title: 'Technical Team',
    members: [
      {
        name: 'Safeeullah Samir',
        linkedin: 'https://www.linkedin.com/in/safeeullah-samir/',
        photo: team.safeeullahSamir,
        website: 'https://safeeullah.com',
      },
      {
        name: 'Hammad Ejaz',
        linkedin: 'https://www.linkedin.com/in/hammad-ejaz-7a5b80243/',
        photo: team.hammadEjaz,
      },
      {
        name: 'Atabic Umer',
        linkedin: 'https://www.linkedin.com/in/atabicumer/',
        photo: team.atabicUmer,
      },
      {
        name: 'Muhammad Ahmad',
        linkedin: 'https://www.linkedin.com/in/muhammad-ahmad-782b34262/',
        photo: team.muhammadAhmad,
      },
      {
        name: 'Amna Imran Nagi',
        linkedin: 'https://www.linkedin.com/in/amna-imran-nagi-71817b245/',
        photo: team.amnaImranNagi,
      },
      {
        name: 'Talha Ijlal',
        linkedin: 'https://www.linkedin.com/in/talhaijlal/',
        photo: team.talhaIjlal,
      },
      {
        name: 'Abdullah Amjad',
        linkedin: 'https://www.linkedin.com/in/abdullah-amjad-1-/',
        photo: team.abdullahAmjad,
      },
      {
        name: 'Syed Abdul Rehman',
        linkedin: 'https://www.linkedin.com/in/syed-abdr/',
        photo: team.syedAbdulRehman,
      },
      {
        name: 'Hamid Shahid',
        linkedin: 'https://www.linkedin.com/in/hamid-shahid-579531253/',
        photo: team.hamidShahid,
      },
    ],
  },
];
