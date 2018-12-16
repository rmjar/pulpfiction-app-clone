const users = [
  {
    "name": "Gloria",
    "surname": "Kessler",
    "registrationDate": "Tue Apr 03 2018 18:41:32 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "0004bae0-6d23-4faa-8824-ed81ca346512"
  },
  {
    "name": "Hellen",
    "surname": "Boehm",
    "registrationDate": "Mon Jul 02 2018 11:01:01 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "fdb14d74-0d1a-4acb-8461-6d66879904e1"
  },
  {
    "name": "Una",
    "surname": "Halvorson",
    "registrationDate": "Thu Feb 22 2018 00:28:48 GMT+0100 (czas środkowoeuropejski standardowy)",
    "uuid": "3d92cb4e-e7c9-4480-8e79-bfbe9565f0cb"
  },
  {
    "name": "Bernita",
    "surname": "Kilback",
    "registrationDate": "Sun Dec 02 2018 18:08:56 GMT+0100 (czas środkowoeuropejski standardowy)",
    "uuid": "35e12eea-68b9-4b94-b770-e7f17341fca2"
  },
  {
    "name": "Lila",
    "surname": "Gleason",
    "registrationDate": "Mon Jan 15 2018 16:17:15 GMT+0100 (czas środkowoeuropejski standardowy)",
    "uuid": "5e9ddef4-e827-4e92-bafe-04d219a243bf"
  },
  {
    "name": "Lenore",
    "surname": "Leuschke",
    "registrationDate": "Tue Jul 03 2018 08:33:29 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "e53ad30e-8f46-47e2-8af3-ec2414cdb901"
  },
  {
    "name": "Ethelyn",
    "surname": "Nolan",
    "registrationDate": "Mon Mar 05 2018 06:42:19 GMT+0100 (czas środkowoeuropejski standardowy)",
    "uuid": "ecb9e6c0-38e1-4172-a5bb-7563bd1062dd"
  },
  {
    "name": "Norene",
    "surname": "Wiegand",
    "registrationDate": "Sun Jul 22 2018 18:17:25 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "51c24318-1bd2-4a33-83b5-896581a48db0"
  },
  {
    "name": "Josephine",
    "surname": "Rohan",
    "registrationDate": "Sun Apr 15 2018 07:24:38 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "38fc2227-3e65-4f47-90b1-841f0ee65c18"
  },
  {
    "name": "Conrad",
    "surname": "Bogisich",
    "registrationDate": "Sun Nov 18 2018 03:35:10 GMT+0100 (czas środkowoeuropejski standardowy)",
    "uuid": "39b71de8-78e1-4e39-93a8-e7f9ab5e9467"
  },
  {
    "name": "Linda",
    "surname": "Russel",
    "registrationDate": "Sat Mar 10 2018 10:49:50 GMT+0100 (czas środkowoeuropejski standardowy)",
    "uuid": "9ed8b293-f73d-4318-a1a2-492c2ffee5b3"
  },
  {
    "name": "Yadira",
    "surname": "McDermott",
    "registrationDate": "Fri Aug 03 2018 19:11:03 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "f6d57f2c-a6bc-44da-b8f6-27c1507d386c"
  },
  {
    "name": "Ole",
    "surname": "Wilkinson",
    "registrationDate": "Mon Apr 09 2018 09:35:25 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "ad606c6a-1535-43ef-a6b9-a73f37f60dcc"
  },
  {
    "name": "Kendrick",
    "surname": "Kirlin",
    "registrationDate": "Fri Mar 16 2018 12:20:01 GMT+0100 (czas środkowoeuropejski standardowy)",
    "uuid": "c32223f8-bccf-4b56-81cc-d3267e0f95db"
  },
  {
    "name": "Ladarius",
    "surname": "Walter",
    "registrationDate": "Tue Dec 19 2017 13:07:23 GMT+0100 (czas środkowoeuropejski standardowy)",
    "uuid": "78498e69-25b2-4511-a151-2e8c8c9b2050"
  },
  {
    "name": "Delores",
    "surname": "Stanton",
    "registrationDate": "Thu Jan 18 2018 15:58:42 GMT+0100 (czas środkowoeuropejski standardowy)",
    "uuid": "4c67cb46-08ec-46b1-b391-f1ee89c6f6c4"
  },
  {
    "name": "Torrey",
    "surname": "Koelpin",
    "registrationDate": "Fri May 11 2018 13:18:19 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "88d1fe0b-7366-4383-b0ad-cc170fce3e38"
  },
  {
    "name": "Deja",
    "surname": "Mante",
    "registrationDate": "Sun Jul 15 2018 00:20:21 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "73d7ea20-2b5a-49d8-b38a-0c02bf1d6ec4"
  },
  {
    "name": "Giles",
    "surname": "Rippin",
    "registrationDate": "Sat Jul 14 2018 20:09:46 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "0430c8fa-c077-47d1-87d9-6c28389a6f5a"
  },
  {
    "name": "Donato",
    "surname": "Harber",
    "registrationDate": "Wed Jan 24 2018 14:08:09 GMT+0100 (czas środkowoeuropejski standardowy)",
    "uuid": "61aaa213-4ccc-41a0-9310-7e3c10898997"
  },
  {
    "name": "Raquel",
    "surname": "Effertz",
    "registrationDate": "Sat Jun 16 2018 04:42:24 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "bfe3577a-0c5f-4154-8b3e-49ac27ac9d6a"
  },
  {
    "name": "Casey",
    "surname": "Kassulke",
    "registrationDate": "Sat Aug 25 2018 04:09:25 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "53d096ff-22cc-4c07-b9ba-06d6f7088233"
  },
  {
    "name": "Demetrius",
    "surname": "Wisoky",
    "registrationDate": "Mon Aug 13 2018 19:17:49 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "7d319037-2fc9-45f1-a778-d32b0f1be10e"
  },
  {
    "name": "Belle",
    "surname": "Price",
    "registrationDate": "Sat Jul 14 2018 02:49:02 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "739ed789-7e0d-4092-963a-179ed52de4a3"
  },
  {
    "name": "Duane",
    "surname": "Torp",
    "registrationDate": "Tue Sep 25 2018 03:47:42 GMT+0200 (czas środkowoeuropejski letni)",
    "uuid": "95d7a7a0-9e24-413d-9fca-73bf81a8e253"
  },
  {
    "name": "Oceane",
    "surname": "Rosenbaum",
    "registrationDate": "Fri Nov 16 2018 11:30:44 GMT+0100 (czas środkowoeuropejski standardowy)",
    "uuid": "0d9cc130-496b-40f4-aa9c-f2f4a094a79e"
  }
]

export default users;