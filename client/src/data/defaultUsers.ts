export type Account = {
  id: string;
  type: string;
  number: string;
  balance: number;
  icon: string;
};

export type Transaction = {
  id: number;
  type: string;
  reference: string;
  date: string;
  amount: number;
  status: string;
  category: string;
};

export type DefaultUser = {
  id: string;
  identifiant: string;
  codepersonnel: string;
  nom: string;
  prenom: string;
  location: string;
  manager: string;
  email?: string;
  phone?: string;
  address?: string;
  managerEmail?: string;
  managerPhone?: string;
  managerAgency?: string;
  status: string;
  lastConnection: string;
  accounts: Account[];
  transactions: Transaction[];
  card: {
    number: string;
    holder: string;
    expiry: string;
    isBlocked: boolean;
    foreignPayments: boolean;
    limit: number;
    withdrawalLimit: number;
  };
  rib: {
    bankName: string;
    bankCode: string;
    branchCode: string;
    accountNumber: string;
    key: string;
    iban: string;
    swift: string;
    bankAddress?: string;
  };
};

import { isSupabaseConfigured, supabase } from "../lib/supabase";

export const DEFAULT_USERS: DefaultUser[] = [
  {
    "id": "user_000",
    "identifiant": "1000000000",
    "codepersonnel": "101234",
    "nom": "Dupont",
    "prenom": "Jean",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "jean.dupont@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2200",
        "balance": 1000000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5400",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8800",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6600",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400000",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400000",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8800 2200",
      "holder": "Jean Dupont",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012300",
      "key": "10",
      "iban": "MA64 2250 1000 5435012300 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_001",
    "identifiant": "1000000001",
    "codepersonnel": "101235",
    "nom": "Martin",
    "prenom": "Marie",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "marie.martin@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2201",
        "balance": 998750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5401",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8801",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6601",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400001",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400001",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8801 2201",
      "holder": "Marie Martin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012301",
      "key": "10",
      "iban": "MA64 2250 1000 5435012301 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_002",
    "identifiant": "1000000002",
    "codepersonnel": "101236",
    "nom": "Bernard",
    "prenom": "Pierre",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "pierre.bernard@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2202",
        "balance": 997500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5402",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8802",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6602",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400002",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400002",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8802 2202",
      "holder": "Pierre Bernard",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012302",
      "key": "10",
      "iban": "MA64 2250 1000 5435012302 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_003",
    "identifiant": "1000000003",
    "codepersonnel": "101237",
    "nom": "Thomas",
    "prenom": "Sophie",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "sophie.thomas@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2203",
        "balance": 996250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5403",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8803",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6603",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400003",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400003",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8803 2203",
      "holder": "Sophie Thomas",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012303",
      "key": "10",
      "iban": "MA64 2250 1000 5435012303 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_004",
    "identifiant": "1000000004",
    "codepersonnel": "101238",
    "nom": "Robert",
    "prenom": "Lucas",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "lucas.robert@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2204",
        "balance": 995000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5404",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8804",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6604",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400004",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400004",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8804 2204",
      "holder": "Lucas Robert",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012304",
      "key": "10",
      "iban": "MA64 2250 1000 5435012304 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_005",
    "identifiant": "1000000005",
    "codepersonnel": "101239",
    "nom": "Petit",
    "prenom": "Camille",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "camille.petit@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2205",
        "balance": 993750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5405",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8805",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6605",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400005",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400005",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8805 2205",
      "holder": "Camille Petit",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012305",
      "key": "10",
      "iban": "MA64 2250 1000 5435012305 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_006",
    "identifiant": "1000000006",
    "codepersonnel": "101240",
    "nom": "Durand",
    "prenom": "Thomas",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "thomas.durand@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2206",
        "balance": 992500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5406",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8806",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6606",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400006",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400006",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8806 2206",
      "holder": "Thomas Durand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012306",
      "key": "10",
      "iban": "MA64 2250 1000 5435012306 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_007",
    "identifiant": "1000000007",
    "codepersonnel": "101241",
    "nom": "Leroy",
    "prenom": "Emma",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "emma.leroy@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2207",
        "balance": 991250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5407",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8807",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6607",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400007",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400007",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8807 2207",
      "holder": "Emma Leroy",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012307",
      "key": "10",
      "iban": "MA64 2250 1000 5435012307 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_008",
    "identifiant": "1000000008",
    "codepersonnel": "101242",
    "nom": "Moreau",
    "prenom": "Nicolas",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "nicolas.moreau@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2208",
        "balance": 990000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5408",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8808",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6608",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400008",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400008",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8808 2208",
      "holder": "Nicolas Moreau",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012308",
      "key": "10",
      "iban": "MA64 2250 1000 5435012308 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_009",
    "identifiant": "1000000009",
    "codepersonnel": "101243",
    "nom": "Simon",
    "prenom": "Chloé",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "chloe.simon@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2209",
        "balance": 988750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5409",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8809",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6609",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400009",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400009",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8809 2209",
      "holder": "Chloé Simon",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012309",
      "key": "10",
      "iban": "MA64 2250 1000 5435012309 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_010",
    "identifiant": "1000000010",
    "codepersonnel": "101244",
    "nom": "Laurent",
    "prenom": "Julien",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "julien.laurent@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2210",
        "balance": 987500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5410",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8810",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6610",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400010",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400010",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8810 2210",
      "holder": "Julien Laurent",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012310",
      "key": "10",
      "iban": "MA64 2250 1000 5435012310 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_011",
    "identifiant": "1000000011",
    "codepersonnel": "101245",
    "nom": "Lefebvre",
    "prenom": "Léa",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "lea.lefebvre@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2211",
        "balance": 986250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5411",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8811",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6611",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400011",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400011",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8811 2211",
      "holder": "Léa Lefebvre",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012311",
      "key": "10",
      "iban": "MA64 2250 1000 5435012311 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_012",
    "identifiant": "1000000012",
    "codepersonnel": "101246",
    "nom": "Michel",
    "prenom": "Antoine",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "antoine.michel@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2212",
        "balance": 985000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5412",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8812",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6612",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400012",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400012",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8812 2212",
      "holder": "Antoine Michel",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012312",
      "key": "10",
      "iban": "MA64 2250 1000 5435012312 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_013",
    "identifiant": "1000000013",
    "codepersonnel": "101247",
    "nom": "Garcia",
    "prenom": "Manon",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "manon.garcia@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2213",
        "balance": 983750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5413",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8813",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6613",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400013",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400013",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8813 2213",
      "holder": "Manon Garcia",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012313",
      "key": "10",
      "iban": "MA64 2250 1000 5435012313 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_014",
    "identifiant": "1000000014",
    "codepersonnel": "101248",
    "nom": "David",
    "prenom": "Hugo",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "hugo.david@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2214",
        "balance": 982500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5414",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8814",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6614",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400014",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400014",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8814 2214",
      "holder": "Hugo David",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012314",
      "key": "10",
      "iban": "MA64 2250 1000 5435012314 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_015",
    "identifiant": "1000000015",
    "codepersonnel": "101249",
    "nom": "Bertrand",
    "prenom": "Clara",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "clara.bertrand@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2215",
        "balance": 981250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5415",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8815",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6615",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400015",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400015",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8815 2215",
      "holder": "Clara Bertrand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012315",
      "key": "10",
      "iban": "MA64 2250 1000 5435012315 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_016",
    "identifiant": "1000000016",
    "codepersonnel": "101250",
    "nom": "Roux",
    "prenom": "Alexandre",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "alexandre.roux@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2216",
        "balance": 980000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5416",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8816",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6616",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400016",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400016",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8816 2216",
      "holder": "Alexandre Roux",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012316",
      "key": "10",
      "iban": "MA64 2250 1000 5435012316 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_017",
    "identifiant": "1000000017",
    "codepersonnel": "101251",
    "nom": "Vincent",
    "prenom": "Inès",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "ines.vincent@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2217",
        "balance": 978750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5417",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8817",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6617",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400017",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400017",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8817 2217",
      "holder": "Inès Vincent",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012317",
      "key": "10",
      "iban": "MA64 2250 1000 5435012317 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_018",
    "identifiant": "1000000018",
    "codepersonnel": "101252",
    "nom": "Fournier",
    "prenom": "Maxime",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "maxime.fournier@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2218",
        "balance": 977500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5418",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8818",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6618",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400018",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400018",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8818 2218",
      "holder": "Maxime Fournier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012318",
      "key": "10",
      "iban": "MA64 2250 1000 5435012318 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_019",
    "identifiant": "1000000019",
    "codepersonnel": "101253",
    "nom": "Morel",
    "prenom": "Élodie",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "elodie.morel@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2219",
        "balance": 976250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5419",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8819",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6619",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400019",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400019",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8819 2219",
      "holder": "Élodie Morel",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012319",
      "key": "10",
      "iban": "MA64 2250 1000 5435012319 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_020",
    "identifiant": "1000000020",
    "codepersonnel": "101254",
    "nom": "Dupont",
    "prenom": "Jean",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "jean.dupont@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2220",
        "balance": 975000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5420",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8820",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6620",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400020",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400020",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8820 2220",
      "holder": "Jean Dupont",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012320",
      "key": "10",
      "iban": "MA64 2250 1000 5435012320 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_021",
    "identifiant": "1000000021",
    "codepersonnel": "101255",
    "nom": "Martin",
    "prenom": "Marie",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "marie.martin@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2221",
        "balance": 973750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5421",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8821",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6621",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400021",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400021",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8821 2221",
      "holder": "Marie Martin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012321",
      "key": "10",
      "iban": "MA64 2250 1000 5435012321 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_022",
    "identifiant": "1000000022",
    "codepersonnel": "101256",
    "nom": "Bernard",
    "prenom": "Pierre",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "pierre.bernard@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2222",
        "balance": 972500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5422",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8822",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6622",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400022",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400022",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8822 2222",
      "holder": "Pierre Bernard",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012322",
      "key": "10",
      "iban": "MA64 2250 1000 5435012322 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_023",
    "identifiant": "1000000023",
    "codepersonnel": "101257",
    "nom": "Thomas",
    "prenom": "Sophie",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "sophie.thomas@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2223",
        "balance": 971250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5423",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8823",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6623",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400023",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400023",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8823 2223",
      "holder": "Sophie Thomas",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012323",
      "key": "10",
      "iban": "MA64 2250 1000 5435012323 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_024",
    "identifiant": "1000000024",
    "codepersonnel": "101258",
    "nom": "Robert",
    "prenom": "Lucas",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "lucas.robert@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2224",
        "balance": 970000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5424",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8824",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6624",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400024",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400024",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8824 2224",
      "holder": "Lucas Robert",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012324",
      "key": "10",
      "iban": "MA64 2250 1000 5435012324 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_025",
    "identifiant": "1000000025",
    "codepersonnel": "101259",
    "nom": "Petit",
    "prenom": "Camille",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "camille.petit@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2225",
        "balance": 968750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5425",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8825",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6625",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400025",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400025",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8825 2225",
      "holder": "Camille Petit",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012325",
      "key": "10",
      "iban": "MA64 2250 1000 5435012325 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_026",
    "identifiant": "1000000026",
    "codepersonnel": "101260",
    "nom": "Durand",
    "prenom": "Thomas",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "thomas.durand@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2226",
        "balance": 967500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5426",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8826",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6626",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400026",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400026",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8826 2226",
      "holder": "Thomas Durand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012326",
      "key": "10",
      "iban": "MA64 2250 1000 5435012326 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_027",
    "identifiant": "1000000027",
    "codepersonnel": "101261",
    "nom": "Leroy",
    "prenom": "Emma",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "emma.leroy@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2227",
        "balance": 966250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5427",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8827",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6627",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400027",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400027",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8827 2227",
      "holder": "Emma Leroy",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012327",
      "key": "10",
      "iban": "MA64 2250 1000 5435012327 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_028",
    "identifiant": "1000000028",
    "codepersonnel": "101262",
    "nom": "Moreau",
    "prenom": "Nicolas",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "nicolas.moreau@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2228",
        "balance": 965000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5428",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8828",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6628",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400028",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400028",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8828 2228",
      "holder": "Nicolas Moreau",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012328",
      "key": "10",
      "iban": "MA64 2250 1000 5435012328 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_029",
    "identifiant": "1000000029",
    "codepersonnel": "101263",
    "nom": "Simon",
    "prenom": "Chloé",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "chloe.simon@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2229",
        "balance": 963750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5429",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8829",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6629",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400029",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400029",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8829 2229",
      "holder": "Chloé Simon",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012329",
      "key": "10",
      "iban": "MA64 2250 1000 5435012329 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_030",
    "identifiant": "1000000030",
    "codepersonnel": "101264",
    "nom": "Laurent",
    "prenom": "Julien",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "julien.laurent@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2230",
        "balance": 962500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5430",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8830",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6630",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400030",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400030",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8830 2230",
      "holder": "Julien Laurent",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012330",
      "key": "10",
      "iban": "MA64 2250 1000 5435012330 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_031",
    "identifiant": "1000000031",
    "codepersonnel": "101265",
    "nom": "Lefebvre",
    "prenom": "Léa",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "lea.lefebvre@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2231",
        "balance": 961250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5431",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8831",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6631",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400031",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400031",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8831 2231",
      "holder": "Léa Lefebvre",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012331",
      "key": "10",
      "iban": "MA64 2250 1000 5435012331 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_032",
    "identifiant": "1000000032",
    "codepersonnel": "101266",
    "nom": "Michel",
    "prenom": "Antoine",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "antoine.michel@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2232",
        "balance": 960000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5432",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8832",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6632",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400032",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400032",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8832 2232",
      "holder": "Antoine Michel",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012332",
      "key": "10",
      "iban": "MA64 2250 1000 5435012332 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_033",
    "identifiant": "1000000033",
    "codepersonnel": "101267",
    "nom": "Garcia",
    "prenom": "Manon",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "manon.garcia@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2233",
        "balance": 958750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5433",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8833",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6633",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400033",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400033",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8833 2233",
      "holder": "Manon Garcia",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012333",
      "key": "10",
      "iban": "MA64 2250 1000 5435012333 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_034",
    "identifiant": "1000000034",
    "codepersonnel": "101268",
    "nom": "David",
    "prenom": "Hugo",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "hugo.david@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2234",
        "balance": 957500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5434",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8834",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6634",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400034",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400034",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8834 2234",
      "holder": "Hugo David",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012334",
      "key": "10",
      "iban": "MA64 2250 1000 5435012334 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_035",
    "identifiant": "1000000035",
    "codepersonnel": "101269",
    "nom": "Bertrand",
    "prenom": "Clara",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "clara.bertrand@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2235",
        "balance": 956250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5435",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8835",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6635",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400035",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400035",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8835 2235",
      "holder": "Clara Bertrand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012335",
      "key": "10",
      "iban": "MA64 2250 1000 5435012335 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_036",
    "identifiant": "1000000036",
    "codepersonnel": "101270",
    "nom": "Roux",
    "prenom": "Alexandre",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "alexandre.roux@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2236",
        "balance": 955000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5436",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8836",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6636",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400036",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400036",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8836 2236",
      "holder": "Alexandre Roux",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012336",
      "key": "10",
      "iban": "MA64 2250 1000 5435012336 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_037",
    "identifiant": "1000000037",
    "codepersonnel": "101271",
    "nom": "Vincent",
    "prenom": "Inès",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "ines.vincent@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2237",
        "balance": 953750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5437",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8837",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6637",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400037",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400037",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8837 2237",
      "holder": "Inès Vincent",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012337",
      "key": "10",
      "iban": "MA64 2250 1000 5435012337 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_038",
    "identifiant": "1000000038",
    "codepersonnel": "101272",
    "nom": "Fournier",
    "prenom": "Maxime",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "maxime.fournier@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2238",
        "balance": 952500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5438",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8838",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6638",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400038",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400038",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8838 2238",
      "holder": "Maxime Fournier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012338",
      "key": "10",
      "iban": "MA64 2250 1000 5435012338 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_039",
    "identifiant": "1000000039",
    "codepersonnel": "101273",
    "nom": "Morel",
    "prenom": "Élodie",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "elodie.morel@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2239",
        "balance": 951250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5439",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8839",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6639",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400039",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400039",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8839 2239",
      "holder": "Élodie Morel",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012339",
      "key": "10",
      "iban": "MA64 2250 1000 5435012339 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_040",
    "identifiant": "1000000040",
    "codepersonnel": "101274",
    "nom": "Dupont",
    "prenom": "Jean",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "jean.dupont@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2240",
        "balance": 950000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5440",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8840",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6640",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400040",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400040",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8840 2240",
      "holder": "Jean Dupont",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012340",
      "key": "10",
      "iban": "MA64 2250 1000 5435012340 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_041",
    "identifiant": "1000000041",
    "codepersonnel": "101275",
    "nom": "Martin",
    "prenom": "Marie",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "marie.martin@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2241",
        "balance": 948750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5441",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8841",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6641",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400041",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400041",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8841 2241",
      "holder": "Marie Martin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012341",
      "key": "10",
      "iban": "MA64 2250 1000 5435012341 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_042",
    "identifiant": "1000000042",
    "codepersonnel": "101276",
    "nom": "Bernard",
    "prenom": "Pierre",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "pierre.bernard@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2242",
        "balance": 947500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5442",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8842",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6642",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400042",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400042",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8842 2242",
      "holder": "Pierre Bernard",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012342",
      "key": "10",
      "iban": "MA64 2250 1000 5435012342 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_043",
    "identifiant": "1000000043",
    "codepersonnel": "101277",
    "nom": "Thomas",
    "prenom": "Sophie",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "sophie.thomas@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2243",
        "balance": 946250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5443",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8843",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6643",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400043",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400043",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8843 2243",
      "holder": "Sophie Thomas",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012343",
      "key": "10",
      "iban": "MA64 2250 1000 5435012343 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_044",
    "identifiant": "1000000044",
    "codepersonnel": "101278",
    "nom": "Robert",
    "prenom": "Lucas",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "lucas.robert@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2244",
        "balance": 945000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5444",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8844",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6644",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400044",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400044",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8844 2244",
      "holder": "Lucas Robert",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012344",
      "key": "10",
      "iban": "MA64 2250 1000 5435012344 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_045",
    "identifiant": "1000000045",
    "codepersonnel": "101279",
    "nom": "Petit",
    "prenom": "Camille",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "camille.petit@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2245",
        "balance": 943750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5445",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8845",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6645",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400045",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400045",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8845 2245",
      "holder": "Camille Petit",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012345",
      "key": "10",
      "iban": "MA64 2250 1000 5435012345 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_046",
    "identifiant": "1000000046",
    "codepersonnel": "101280",
    "nom": "Durand",
    "prenom": "Thomas",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "thomas.durand@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2246",
        "balance": 942500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5446",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8846",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6646",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400046",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400046",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8846 2246",
      "holder": "Thomas Durand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012346",
      "key": "10",
      "iban": "MA64 2250 1000 5435012346 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_047",
    "identifiant": "1000000047",
    "codepersonnel": "101281",
    "nom": "Leroy",
    "prenom": "Emma",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "emma.leroy@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2247",
        "balance": 941250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5447",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8847",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6647",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400047",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400047",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8847 2247",
      "holder": "Emma Leroy",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012347",
      "key": "10",
      "iban": "MA64 2250 1000 5435012347 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_048",
    "identifiant": "1000000048",
    "codepersonnel": "101282",
    "nom": "Moreau",
    "prenom": "Nicolas",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "nicolas.moreau@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2248",
        "balance": 940000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5448",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8848",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6648",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400048",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400048",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8848 2248",
      "holder": "Nicolas Moreau",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012348",
      "key": "10",
      "iban": "MA64 2250 1000 5435012348 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_049",
    "identifiant": "1000000049",
    "codepersonnel": "101283",
    "nom": "Simon",
    "prenom": "Chloé",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "chloe.simon@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2249",
        "balance": 938750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5449",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8849",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6649",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400049",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400049",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8849 2249",
      "holder": "Chloé Simon",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012349",
      "key": "10",
      "iban": "MA64 2250 1000 5435012349 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_050",
    "identifiant": "1000000050",
    "codepersonnel": "101284",
    "nom": "Laurent",
    "prenom": "Julien",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "julien.laurent@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2250",
        "balance": 937500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5450",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8850",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6650",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400050",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400050",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8850 2250",
      "holder": "Julien Laurent",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012350",
      "key": "10",
      "iban": "MA64 2250 1000 5435012350 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_051",
    "identifiant": "1000000051",
    "codepersonnel": "101285",
    "nom": "Lefebvre",
    "prenom": "Léa",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "lea.lefebvre@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2251",
        "balance": 936250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5451",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8851",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6651",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400051",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400051",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8851 2251",
      "holder": "Léa Lefebvre",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012351",
      "key": "10",
      "iban": "MA64 2250 1000 5435012351 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_052",
    "identifiant": "1000000052",
    "codepersonnel": "101286",
    "nom": "Michel",
    "prenom": "Antoine",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "antoine.michel@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2252",
        "balance": 935000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5452",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8852",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6652",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400052",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400052",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8852 2252",
      "holder": "Antoine Michel",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012352",
      "key": "10",
      "iban": "MA64 2250 1000 5435012352 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_053",
    "identifiant": "1000000053",
    "codepersonnel": "101287",
    "nom": "Garcia",
    "prenom": "Manon",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "manon.garcia@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2253",
        "balance": 933750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5453",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8853",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6653",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400053",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400053",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8853 2253",
      "holder": "Manon Garcia",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012353",
      "key": "10",
      "iban": "MA64 2250 1000 5435012353 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_054",
    "identifiant": "1000000054",
    "codepersonnel": "101288",
    "nom": "David",
    "prenom": "Hugo",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "hugo.david@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2254",
        "balance": 932500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5454",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8854",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6654",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400054",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400054",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8854 2254",
      "holder": "Hugo David",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012354",
      "key": "10",
      "iban": "MA64 2250 1000 5435012354 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_055",
    "identifiant": "1000000055",
    "codepersonnel": "101289",
    "nom": "Bertrand",
    "prenom": "Clara",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "clara.bertrand@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2255",
        "balance": 931250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5455",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8855",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6655",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400055",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400055",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8855 2255",
      "holder": "Clara Bertrand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012355",
      "key": "10",
      "iban": "MA64 2250 1000 5435012355 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_056",
    "identifiant": "1000000056",
    "codepersonnel": "101290",
    "nom": "Roux",
    "prenom": "Alexandre",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "alexandre.roux@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2256",
        "balance": 930000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5456",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8856",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6656",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400056",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400056",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8856 2256",
      "holder": "Alexandre Roux",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012356",
      "key": "10",
      "iban": "MA64 2250 1000 5435012356 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_057",
    "identifiant": "1000000057",
    "codepersonnel": "101291",
    "nom": "Vincent",
    "prenom": "Inès",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "ines.vincent@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2257",
        "balance": 928750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5457",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8857",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6657",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400057",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400057",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8857 2257",
      "holder": "Inès Vincent",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012357",
      "key": "10",
      "iban": "MA64 2250 1000 5435012357 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_058",
    "identifiant": "1000000058",
    "codepersonnel": "101292",
    "nom": "Fournier",
    "prenom": "Maxime",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "maxime.fournier@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2258",
        "balance": 927500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5458",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8858",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6658",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400058",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400058",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8858 2258",
      "holder": "Maxime Fournier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012358",
      "key": "10",
      "iban": "MA64 2250 1000 5435012358 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_059",
    "identifiant": "1000000059",
    "codepersonnel": "101293",
    "nom": "Morel",
    "prenom": "Élodie",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "elodie.morel@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2259",
        "balance": 926250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5459",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8859",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6659",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400059",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400059",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8859 2259",
      "holder": "Élodie Morel",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012359",
      "key": "10",
      "iban": "MA64 2250 1000 5435012359 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_060",
    "identifiant": "1000000060",
    "codepersonnel": "101294",
    "nom": "Dupont",
    "prenom": "Jean",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "jean.dupont@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2260",
        "balance": 925000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5460",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8860",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6660",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400060",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400060",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8860 2260",
      "holder": "Jean Dupont",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012360",
      "key": "10",
      "iban": "MA64 2250 1000 5435012360 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_061",
    "identifiant": "1000000061",
    "codepersonnel": "101295",
    "nom": "Martin",
    "prenom": "Marie",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "marie.martin@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2261",
        "balance": 923750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5461",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8861",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6661",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400061",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400061",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8861 2261",
      "holder": "Marie Martin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012361",
      "key": "10",
      "iban": "MA64 2250 1000 5435012361 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_062",
    "identifiant": "1000000062",
    "codepersonnel": "101296",
    "nom": "Bernard",
    "prenom": "Pierre",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "pierre.bernard@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2262",
        "balance": 922500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5462",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8862",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6662",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400062",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400062",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8862 2262",
      "holder": "Pierre Bernard",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012362",
      "key": "10",
      "iban": "MA64 2250 1000 5435012362 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_063",
    "identifiant": "1000000063",
    "codepersonnel": "101297",
    "nom": "Thomas",
    "prenom": "Sophie",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "sophie.thomas@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2263",
        "balance": 921250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5463",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8863",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6663",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400063",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400063",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8863 2263",
      "holder": "Sophie Thomas",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012363",
      "key": "10",
      "iban": "MA64 2250 1000 5435012363 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_064",
    "identifiant": "1000000064",
    "codepersonnel": "101298",
    "nom": "Robert",
    "prenom": "Lucas",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "lucas.robert@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2264",
        "balance": 920000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5464",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8864",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6664",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400064",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400064",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8864 2264",
      "holder": "Lucas Robert",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012364",
      "key": "10",
      "iban": "MA64 2250 1000 5435012364 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_065",
    "identifiant": "1000000065",
    "codepersonnel": "101299",
    "nom": "Petit",
    "prenom": "Camille",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "camille.petit@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2265",
        "balance": 918750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5465",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8865",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6665",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400065",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400065",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8865 2265",
      "holder": "Camille Petit",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012365",
      "key": "10",
      "iban": "MA64 2250 1000 5435012365 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_066",
    "identifiant": "1000000066",
    "codepersonnel": "101300",
    "nom": "Durand",
    "prenom": "Thomas",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "thomas.durand@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2266",
        "balance": 917500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5466",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8866",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6666",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400066",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400066",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8866 2266",
      "holder": "Thomas Durand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012366",
      "key": "10",
      "iban": "MA64 2250 1000 5435012366 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_067",
    "identifiant": "1000000067",
    "codepersonnel": "101301",
    "nom": "Leroy",
    "prenom": "Emma",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "emma.leroy@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2267",
        "balance": 916250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5467",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8867",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6667",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400067",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400067",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8867 2267",
      "holder": "Emma Leroy",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012367",
      "key": "10",
      "iban": "MA64 2250 1000 5435012367 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_068",
    "identifiant": "1000000068",
    "codepersonnel": "101302",
    "nom": "Moreau",
    "prenom": "Nicolas",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "nicolas.moreau@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2268",
        "balance": 915000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5468",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8868",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6668",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400068",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400068",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8868 2268",
      "holder": "Nicolas Moreau",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012368",
      "key": "10",
      "iban": "MA64 2250 1000 5435012368 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_069",
    "identifiant": "1000000069",
    "codepersonnel": "101303",
    "nom": "Simon",
    "prenom": "Chloé",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "chloe.simon@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2269",
        "balance": 913750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5469",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8869",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6669",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400069",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400069",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8869 2269",
      "holder": "Chloé Simon",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012369",
      "key": "10",
      "iban": "MA64 2250 1000 5435012369 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_070",
    "identifiant": "1000000070",
    "codepersonnel": "101304",
    "nom": "Laurent",
    "prenom": "Julien",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "julien.laurent@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2270",
        "balance": 912500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5470",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8870",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6670",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400070",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400070",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8870 2270",
      "holder": "Julien Laurent",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012370",
      "key": "10",
      "iban": "MA64 2250 1000 5435012370 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_071",
    "identifiant": "1000000071",
    "codepersonnel": "101305",
    "nom": "Lefebvre",
    "prenom": "Léa",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "lea.lefebvre@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2271",
        "balance": 911250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5471",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8871",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6671",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400071",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400071",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8871 2271",
      "holder": "Léa Lefebvre",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012371",
      "key": "10",
      "iban": "MA64 2250 1000 5435012371 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_072",
    "identifiant": "1000000072",
    "codepersonnel": "101306",
    "nom": "Michel",
    "prenom": "Antoine",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "antoine.michel@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2272",
        "balance": 910000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5472",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8872",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6672",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400072",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400072",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8872 2272",
      "holder": "Antoine Michel",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012372",
      "key": "10",
      "iban": "MA64 2250 1000 5435012372 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_073",
    "identifiant": "1000000073",
    "codepersonnel": "101307",
    "nom": "Garcia",
    "prenom": "Manon",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "manon.garcia@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2273",
        "balance": 908750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5473",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8873",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6673",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400073",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400073",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8873 2273",
      "holder": "Manon Garcia",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012373",
      "key": "10",
      "iban": "MA64 2250 1000 5435012373 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_074",
    "identifiant": "1000000074",
    "codepersonnel": "101308",
    "nom": "David",
    "prenom": "Hugo",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "hugo.david@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2274",
        "balance": 907500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5474",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8874",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6674",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400074",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400074",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8874 2274",
      "holder": "Hugo David",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012374",
      "key": "10",
      "iban": "MA64 2250 1000 5435012374 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_075",
    "identifiant": "1000000075",
    "codepersonnel": "101309",
    "nom": "Bertrand",
    "prenom": "Clara",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "clara.bertrand@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2275",
        "balance": 906250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5475",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8875",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6675",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400075",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400075",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8875 2275",
      "holder": "Clara Bertrand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012375",
      "key": "10",
      "iban": "MA64 2250 1000 5435012375 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_076",
    "identifiant": "1000000076",
    "codepersonnel": "101310",
    "nom": "Roux",
    "prenom": "Alexandre",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "alexandre.roux@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2276",
        "balance": 905000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5476",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8876",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6676",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400076",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400076",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8876 2276",
      "holder": "Alexandre Roux",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012376",
      "key": "10",
      "iban": "MA64 2250 1000 5435012376 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_077",
    "identifiant": "1000000077",
    "codepersonnel": "101311",
    "nom": "Vincent",
    "prenom": "Inès",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "ines.vincent@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2277",
        "balance": 903750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5477",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8877",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6677",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400077",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400077",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8877 2277",
      "holder": "Inès Vincent",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012377",
      "key": "10",
      "iban": "MA64 2250 1000 5435012377 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_078",
    "identifiant": "1000000078",
    "codepersonnel": "101312",
    "nom": "Fournier",
    "prenom": "Maxime",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "maxime.fournier@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2278",
        "balance": 902500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5478",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8878",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6678",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400078",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400078",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8878 2278",
      "holder": "Maxime Fournier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012378",
      "key": "10",
      "iban": "MA64 2250 1000 5435012378 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_079",
    "identifiant": "1000000079",
    "codepersonnel": "101313",
    "nom": "Morel",
    "prenom": "Élodie",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "elodie.morel@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2279",
        "balance": 901250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5479",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8879",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6679",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400079",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400079",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8879 2279",
      "holder": "Élodie Morel",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012379",
      "key": "10",
      "iban": "MA64 2250 1000 5435012379 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_080",
    "identifiant": "1000000080",
    "codepersonnel": "101314",
    "nom": "Dupont",
    "prenom": "Jean",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "jean.dupont@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2280",
        "balance": 900000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5480",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8880",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6680",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400080",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400080",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8880 2280",
      "holder": "Jean Dupont",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012380",
      "key": "10",
      "iban": "MA64 2250 1000 5435012380 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_081",
    "identifiant": "1000000081",
    "codepersonnel": "101315",
    "nom": "Martin",
    "prenom": "Marie",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "marie.martin@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2281",
        "balance": 898750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5481",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8881",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6681",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400081",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400081",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8881 2281",
      "holder": "Marie Martin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012381",
      "key": "10",
      "iban": "MA64 2250 1000 5435012381 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_082",
    "identifiant": "1000000082",
    "codepersonnel": "101316",
    "nom": "Bernard",
    "prenom": "Pierre",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "pierre.bernard@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2282",
        "balance": 897500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5482",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8882",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6682",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400082",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400082",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8882 2282",
      "holder": "Pierre Bernard",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012382",
      "key": "10",
      "iban": "MA64 2250 1000 5435012382 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_083",
    "identifiant": "1000000083",
    "codepersonnel": "101317",
    "nom": "Thomas",
    "prenom": "Sophie",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "sophie.thomas@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2283",
        "balance": 896250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5483",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8883",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6683",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400083",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400083",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8883 2283",
      "holder": "Sophie Thomas",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012383",
      "key": "10",
      "iban": "MA64 2250 1000 5435012383 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_084",
    "identifiant": "1000000084",
    "codepersonnel": "101318",
    "nom": "Robert",
    "prenom": "Lucas",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "lucas.robert@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2284",
        "balance": 895000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5484",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8884",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6684",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400084",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400084",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8884 2284",
      "holder": "Lucas Robert",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012384",
      "key": "10",
      "iban": "MA64 2250 1000 5435012384 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_085",
    "identifiant": "1000000085",
    "codepersonnel": "101319",
    "nom": "Petit",
    "prenom": "Camille",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "camille.petit@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2285",
        "balance": 893750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5485",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8885",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6685",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400085",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400085",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8885 2285",
      "holder": "Camille Petit",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012385",
      "key": "10",
      "iban": "MA64 2250 1000 5435012385 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_086",
    "identifiant": "1000000086",
    "codepersonnel": "101320",
    "nom": "Durand",
    "prenom": "Thomas",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "thomas.durand@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2286",
        "balance": 892500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5486",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8886",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6686",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400086",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400086",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8886 2286",
      "holder": "Thomas Durand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012386",
      "key": "10",
      "iban": "MA64 2250 1000 5435012386 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_087",
    "identifiant": "1000000087",
    "codepersonnel": "101321",
    "nom": "Leroy",
    "prenom": "Emma",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "emma.leroy@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2287",
        "balance": 891250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5487",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8887",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6687",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400087",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400087",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8887 2287",
      "holder": "Emma Leroy",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012387",
      "key": "10",
      "iban": "MA64 2250 1000 5435012387 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_088",
    "identifiant": "1000000088",
    "codepersonnel": "101322",
    "nom": "Moreau",
    "prenom": "Nicolas",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "nicolas.moreau@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2288",
        "balance": 890000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5488",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8888",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6688",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400088",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400088",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8888 2288",
      "holder": "Nicolas Moreau",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012388",
      "key": "10",
      "iban": "MA64 2250 1000 5435012388 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_089",
    "identifiant": "1000000089",
    "codepersonnel": "101323",
    "nom": "Simon",
    "prenom": "Chloé",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "chloe.simon@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2289",
        "balance": 888750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5489",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8889",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6689",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400089",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400089",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8889 2289",
      "holder": "Chloé Simon",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012389",
      "key": "10",
      "iban": "MA64 2250 1000 5435012389 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_090",
    "identifiant": "1000000090",
    "codepersonnel": "101324",
    "nom": "Laurent",
    "prenom": "Julien",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "julien.laurent@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2290",
        "balance": 887500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5490",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8890",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6690",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400090",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400090",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8890 2290",
      "holder": "Julien Laurent",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012390",
      "key": "10",
      "iban": "MA64 2250 1000 5435012390 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_091",
    "identifiant": "1000000091",
    "codepersonnel": "101325",
    "nom": "Lefebvre",
    "prenom": "Léa",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "lea.lefebvre@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2291",
        "balance": 886250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5491",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8891",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6691",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400091",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400091",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8891 2291",
      "holder": "Léa Lefebvre",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012391",
      "key": "10",
      "iban": "MA64 2250 1000 5435012391 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_092",
    "identifiant": "1000000092",
    "codepersonnel": "101326",
    "nom": "Michel",
    "prenom": "Antoine",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "antoine.michel@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2292",
        "balance": 885000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5492",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8892",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6692",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400092",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400092",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8892 2292",
      "holder": "Antoine Michel",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012392",
      "key": "10",
      "iban": "MA64 2250 1000 5435012392 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_093",
    "identifiant": "1000000093",
    "codepersonnel": "101327",
    "nom": "Garcia",
    "prenom": "Manon",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "manon.garcia@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2293",
        "balance": 883750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5493",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8893",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6693",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400093",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400093",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8893 2293",
      "holder": "Manon Garcia",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012393",
      "key": "10",
      "iban": "MA64 2250 1000 5435012393 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_094",
    "identifiant": "1000000094",
    "codepersonnel": "101328",
    "nom": "David",
    "prenom": "Hugo",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "hugo.david@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2294",
        "balance": 882500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5494",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8894",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6694",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400094",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400094",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8894 2294",
      "holder": "Hugo David",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012394",
      "key": "10",
      "iban": "MA64 2250 1000 5435012394 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_095",
    "identifiant": "1000000095",
    "codepersonnel": "101329",
    "nom": "Bertrand",
    "prenom": "Clara",
    "location": "Maroc",
    "manager": "Claire Martin",
    "email": "clara.bertrand@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "claire.martin@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2295",
        "balance": 881250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5495",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8895",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6695",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400095",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400095",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8895 2295",
      "holder": "Clara Bertrand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012395",
      "key": "10",
      "iban": "MA64 2250 1000 5435012395 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_096",
    "identifiant": "1000000096",
    "codepersonnel": "101340",
    "nom": "Roux",
    "prenom": "Alexandre",
    "location": "Maroc",
    "manager": "Arnaud Leroy",
    "email": "alexandre.roux@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "arnaud.leroy@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2296",
        "balance": 880800,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5496",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8896",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6696",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400096",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400096",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8896 2296",
      "holder": "Alexandre Roux",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012396",
      "key": "10",
      "iban": "MA64 2250 1000 5435012396 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_097",
    "identifiant": "1000000097",
    "codepersonnel": "101331",
    "nom": "Vincent",
    "prenom": "Inès",
    "location": "Maroc",
    "manager": "Sophie Bernard",
    "email": "ines.vincent@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "sophie.bernard@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2297",
        "balance": 878750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5497",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8897",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6697",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400097",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400097",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8897 2297",
      "holder": "Inès Vincent",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012397",
      "key": "10",
      "iban": "MA64 2250 1000 5435012397 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_098",
    "identifiant": "1000000098",
    "codepersonnel": "101332",
    "nom": "Fournier",
    "prenom": "Maxime",
    "location": "Maroc",
    "manager": "Marc Durand",
    "email": "maxime.fournier@exemple.ma",
    "phone": "+212 6 12 34 56 78",
    "address": "49 place des Alaouites, 10000 Rabat, Maroc",
    "managerEmail": "marc.durand@exemple.ma",
    "managerPhone": "+212 5 22 54 19 86",
    "managerAgency": "Agence principale — Rabat Centre",
    "status": "Bloqué",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2298",
        "balance": 877500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5498",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8898",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6698",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "MA64000000003000400098",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "MA64000000004000400098",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8898 2298",
      "holder": "Maxime Fournier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "01000",
      "accountNumber": "5435012398",
      "key": "10",
      "iban": "MA64 2250 1000 5435012398 10",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "49 place des Alaouites, 10000 Rabat, Maroc"
    }
  },
  {
    "id": "user_099",
    "identifiant": "1100250099",
    "codepersonnel": "101333",
    "nom": "Gachet",
    "prenom": "Guy Albert",
    "location": "Suisse",
    "manager": "Aziz Ghizlane",
    "email": "Sylvie.huertas@outlook.fr",
    "phone": "not defined",
    "address": "Chemin du jura 15, 1675 Vauderens",
    "managerEmail": "aziz.ghizlaine@creditagricole.ma",
    "managerPhone": "+212607225981",
    "managerAgency": "2 Rue Moulay Mohamed el Baâmrani Casablanca 20250, Maroc",
    "status": "bloqué",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2299",
        "balance": 1955184,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5499",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8899",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6699",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [

    ],
    "card": {
      "number": "4973 1200 8899 2299",
      "holder": "Guy Albert Gachet",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "CRÉDIT AGRICOLE DU MAROC",
      "bankCode": "225",
      "branchCode": "8100",
      "accountNumber": "3 54044946410119",
      "key": "16",
      "iban": "MA64 2258 1003 54044946410119 16",
      "swift": "CNCAMAMRXXX",
      "bankAddress": "2 Rue Moulay Mohamed el Baâmrani Casablanca 20250, Maroc"
    }
  }
];

export const findDefaultUser = (identifiant: string, codepersonnel: string) =>
  getPersistedUsers().find(
    (user) => user.identifiant === identifiant && user.codepersonnel === codepersonnel,
  );

export const loadRemoteUser = async (baseUser: DefaultUser): Promise<DefaultUser> => {
  if (!isSupabaseConfigured) return baseUser;

  const { data, error } = await supabase
    .from("user_data")
    .select("payload")
    .eq("user_id", baseUser.id)
    .maybeSingle();

  if (error) throw error;
  const payload = (data?.payload ?? {}) as Partial<DefaultUser>;

  return {
    ...baseUser,
    ...payload,
    // Les identifiants de démonstration restent définis dans defaultUsers.ts.
    id: baseUser.id,
    identifiant: baseUser.identifiant,
    codepersonnel: baseUser.codepersonnel,
    accounts: Array.isArray(payload.accounts) ? payload.accounts : baseUser.accounts,
    transactions: Array.isArray(payload.transactions) ? payload.transactions : baseUser.transactions,
    card: payload.card ?? baseUser.card,
    rib: payload.rib ?? baseUser.rib,
  };
};

export const AUTH_SESSION_KEY = "credit-agricole-authenticated";
export const AUTH_USER_KEY = "credit-agricole-current-user";
export const DEFAULT_USER_COUNT = DEFAULT_USERS.length;

const slugifyName = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/^\.|\.$/g, "");

const withDefaultProfileData = (user: DefaultUser): DefaultUser => {
  const emailSlug = `${slugifyName(user.prenom)}.${slugifyName(user.nom)}`;

  return {
    ...user,
    email: user.email ?? `${emailSlug}@exemple.ma`,
    phone: user.phone ?? "+212 6 12 34 56 78",
    address: user.address ?? "49 place des Alaouites, 10000 Rabat, Maroc",
    managerEmail: user.managerEmail ?? "marc.durand@exemple.ma",
    managerPhone: user.managerPhone ?? "+212 5 22 54 19 86",
    managerAgency: user.managerAgency ?? "Agence principale — Rabat Centre",
    rib: {
      ...user.rib,
      bankAddress: user.rib.bankAddress ?? "Agence principale — 49 place des Alaouites, 10000 Rabat, Maroc",
    },
  };
};

// defaultUsers.ts est la source unique des données de profil affichées par l’application.
// Les valeurs modifiées dans DEFAULT_USERS sont donc relues directement après chaque compilation.
export const getPersistedUsers = (): DefaultUser[] => DEFAULT_USERS.map(withDefaultProfileData);

// Les virements peuvent conserver leurs comptes et transactions pendant la session,
// sans écraser les données de profil définies dans DEFAULT_USERS.
export const savePersistedUser = async (updatedUser: DefaultUser): Promise<DefaultUser> => {
  // La session locale est mise à jour immédiatement pour que l'interface reste cohérente.
  if (typeof window !== "undefined") {
    sessionStorage.setItem(AUTH_USER_KEY, JSON.stringify(updatedUser));
  }

  if (!isSupabaseConfigured) return updatedUser;

  const { codepersonnel, ...safeUser } = updatedUser;
  const { error } = await supabase.from("user_data").upsert({
    user_id: updatedUser.id,
    payload: safeUser,
    updated_at: new Date().toISOString(),
  }, { onConflict: "user_id" });

  if (error) {
    throw new Error(`Enregistrement Supabase impossible : ${error.message}`);
  }

  return updatedUser;
};

export const getAuthenticatedUser = (): DefaultUser | null => {
  if (typeof window === "undefined") return null;
  const storedUser = sessionStorage.getItem(AUTH_USER_KEY);
  if (!storedUser) return null;

  try {
    const sessionUser = JSON.parse(storedUser) as DefaultUser;
    const defaultUser = getPersistedUsers().find((user) => user.id === sessionUser.id);
    if (!defaultUser) return sessionUser;

    return {
      ...defaultUser,
      // Le statut chargé depuis Supabase reste prioritaire pour la session.
      status: sessionUser.status ?? defaultUser.status,
      // Les changements opérationnels restent propres à la session courante.
      accounts: Array.isArray(sessionUser.accounts) ? sessionUser.accounts : defaultUser.accounts,
      transactions: Array.isArray(sessionUser.transactions) ? sessionUser.transactions : defaultUser.transactions,
    };
  } catch {
    sessionStorage.removeItem(AUTH_USER_KEY);
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    return null;
  }
};

export default DEFAULT_USERS;
