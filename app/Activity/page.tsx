"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "react-feather";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { usePublicKey } from "@/store";

interface Transaction {
  version: string;
  timestamp: string;
  success: boolean;
  vm_status: string;
  sender: string;
  sequence_number: string;
  gas_used: string;
  payload: {
    function: string;
    type_arguments: string[];
    arguments: string[];
  };
  events: {
    key: string;
    sequence_number: string;
    type: string;
    data: any;
  }[];
}

interface GroupedTransactions {
  [date: string]: Transaction[];
}

const RecentActivity = () => {
  const router = useRouter();
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      version: "6108903486",
      hash: "0x7a8f22acde21f6bb3f07d297e7dc81f29a58576e4f0b731ecaa0ebfe77844270",
      state_change_hash:
        "0xc303ca894bb4d50feae8bcbbbb9b0f5099b5bd495c28ffaf631fab3869518644",
      event_root_hash:
        "0x9aa3bdadf8dab8c1b0e5b873693dffb25df2057db9e98ea2e5b956e41f3dc4fe",
      state_checkpoint_hash: null,
      gas_used: "501",
      success: true,
      vm_status: "Executed successfully",
      accumulator_root_hash:
        "0x90192fa2b70b1b5f235247a490fea9560043bfefa9a92ecd87f0138809d36160",
      changes: [
        {
          address:
            "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
          state_key_hash:
            "0xa503e3371dee8e0a72ca61e105b3dc0ae26826b944af7d8c69443fcc8955fefd",
          data: {
            type: "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
            data: {
              coin: {
                value: "199949900",
              },
              deposit_events: {
                counter: "1",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "2",
                  },
                },
              },
              frozen: false,
              withdraw_events: {
                counter: "0",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "3",
                  },
                },
              },
            },
          },
          type: "write_resource",
        },
        {
          address:
            "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
          state_key_hash:
            "0x0b2615fd61857ee0a4d445b3bf1961ab1238727ba429b6f44c41e67dcb80794f",
          data: {
            type: "0x1::coin::CoinStore<0x6e57ae098ab06ecc491d688a255b64b61dd52dbb58d2cce46e7def6013ffc2cd::POP::POP>",
            data: {
              coin: {
                value: "996700000000",
              },
              deposit_events: {
                counter: "1",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "4",
                  },
                },
              },
              frozen: false,
              withdraw_events: {
                counter: "1",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "5",
                  },
                },
              },
            },
          },
          type: "write_resource",
        },
        {
          address:
            "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
          state_key_hash:
            "0x717afae672dd0d77289166a42e91e16c85d1ea9035424f29e898b42e4010a1e2",
          data: {
            type: "0x1::account::Account",
            data: {
              authentication_key:
                "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
              coin_register_events: {
                counter: "2",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "0",
                  },
                },
              },
              guid_creation_num: "6",
              key_rotation_events: {
                counter: "0",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "1",
                  },
                },
              },
              rotation_capability_offer: {
                for: {
                  vec: [],
                },
              },
              sequence_number: "1",
              signer_capability_offer: {
                for: {
                  vec: [],
                },
              },
            },
          },
          type: "write_resource",
        },
        {
          address:
            "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
          state_key_hash:
            "0x09c6a29ad2fdec4f53d3546268b2497e0272ed7b0d710e3a22c236008ee73ca3",
          data: {
            type: "0x1::coin::CoinStore<0x6e57ae098ab06ecc491d688a255b64b61dd52dbb58d2cce46e7def6013ffc2cd::POP::POP>",
            data: {
              coin: {
                value: "3300000000",
              },
              deposit_events: {
                counter: "1",
                guid: {
                  id: {
                    addr: "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
                    creation_num: "4",
                  },
                },
              },
              frozen: false,
              withdraw_events: {
                counter: "0",
                guid: {
                  id: {
                    addr: "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
                    creation_num: "5",
                  },
                },
              },
            },
          },
          type: "write_resource",
        },
        {
          address:
            "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
          state_key_hash:
            "0x1c5e141f9490b56b6310db8e070d8a6ffce64632756a43d703102e427ce28f3d",
          data: {
            type: "0x1::account::Account",
            data: {
              authentication_key:
                "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
              coin_register_events: {
                counter: "2",
                guid: {
                  id: {
                    addr: "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
                    creation_num: "0",
                  },
                },
              },
              guid_creation_num: "6",
              key_rotation_events: {
                counter: "0",
                guid: {
                  id: {
                    addr: "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
                    creation_num: "1",
                  },
                },
              },
              rotation_capability_offer: {
                for: {
                  vec: [],
                },
              },
              sequence_number: "0",
              signer_capability_offer: {
                for: {
                  vec: [],
                },
              },
            },
          },
          type: "write_resource",
        },
        {
          state_key_hash:
            "0x6e4b28d40f98a106a65163530924c0dcb40c1349d3aa915d108b4d6cfc1ddb19",
          handle:
            "0x1b854694ae746cdbd8d44186ca4929b2b337df21d1c74633be19b2710552fdca",
          key: "0x0619dc29a0aac8fa146714058e8dd6d2d0f3bdf5f6331907bf91f3acd81e6935",
          value: "0xc76203639eb9dc940100000000000000",
          data: null,
          type: "write_table_item",
        },
      ],
      sender:
        "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
      sequence_number: "0",
      max_gas_amount: "200000",
      gas_unit_price: "100",
      expiration_timestamp_secs: "1728498595",
      payload: {
        function: "0x1::aptos_account::transfer_coins",
        type_arguments: [
          "0x6e57ae098ab06ecc491d688a255b64b61dd52dbb58d2cce46e7def6013ffc2cd::POP::POP",
        ],
        arguments: [
          "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
          "3300000000",
        ],
        type: "entry_function_payload",
      },
      signature: {
        public_key:
          "0x73d3914afc1f297a2c1f2d32d388e75f5011d464fc918791659bb70e4018ffa2",
        signature:
          "0x9526b9aa2d396eddc4eb7d2b2ddf6cd14afcc50c447b6ca8ebad2422614e8805147f219348efb53b22fc316209baa03e0ac3c2ad6431da329e17f8e6f2ea1803",
        type: "ed25519_signature",
      },
      events: [
        {
          guid: {
            creation_number: "5",
            account_address:
              "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
          },
          sequence_number: "0",
          type: "0x1::coin::WithdrawEvent",
          data: {
            amount: "3300000000",
          },
        },
        {
          guid: {
            creation_number: "0",
            account_address:
              "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
          },
          sequence_number: "1",
          type: "0x1::account::CoinRegisterEvent",
          data: {
            type_info: {
              account_address:
                "0x6e57ae098ab06ecc491d688a255b64b61dd52dbb58d2cce46e7def6013ffc2cd",
              module_name: "0x504f50",
              struct_name: "0x504f50",
            },
          },
        },
        {
          guid: {
            creation_number: "4",
            account_address:
              "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
          },
          sequence_number: "0",
          type: "0x1::coin::DepositEvent",
          data: {
            amount: "3300000000",
          },
        },
        {
          guid: {
            creation_number: "0",
            account_address: "0x0",
          },
          sequence_number: "0",
          type: "0x1::transaction_fee::FeeStatement",
          data: {
            execution_gas_units: "5",
            io_gas_units: "6",
            storage_fee_octas: "49120",
            storage_fee_refund_octas: "0",
            total_charge_gas_units: "501",
          },
        },
      ],
      timestamp: "1728498584826297",
      type: "user_transaction",
    },
    {
      version: "6108919677",
      hash: "0x381055af7d2c72459851825287e2b0382540ffc2eeff7f20e45b019807c6ec63",
      state_change_hash:
        "0x73e823d8994294686e7be22558a839d76651dc57a717d855ffc7f2020bd245e1",
      event_root_hash:
        "0x7703d9cb2ed98979f9cda05f30a2f9af3ef3034425715e4d9d4ac93eac933286",
      state_checkpoint_hash: null,
      gas_used: "9",
      success: true,
      vm_status: "Executed successfully",
      accumulator_root_hash:
        "0xae94813f7c30d2f78f481d1a6a7d538670af0920320e821ae848d9ee444dabd7",
      changes: [
        {
          address:
            "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
          state_key_hash:
            "0xa503e3371dee8e0a72ca61e105b3dc0ae26826b944af7d8c69443fcc8955fefd",
          data: {
            type: "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
            data: {
              coin: {
                value: "199949000",
              },
              deposit_events: {
                counter: "1",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "2",
                  },
                },
              },
              frozen: false,
              withdraw_events: {
                counter: "0",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "3",
                  },
                },
              },
            },
          },
          type: "write_resource",
        },
        {
          address:
            "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
          state_key_hash:
            "0x0b2615fd61857ee0a4d445b3bf1961ab1238727ba429b6f44c41e67dcb80794f",
          data: {
            type: "0x1::coin::CoinStore<0x6e57ae098ab06ecc491d688a255b64b61dd52dbb58d2cce46e7def6013ffc2cd::POP::POP>",
            data: {
              coin: {
                value: "941200000000",
              },
              deposit_events: {
                counter: "1",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "4",
                  },
                },
              },
              frozen: false,
              withdraw_events: {
                counter: "2",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "5",
                  },
                },
              },
            },
          },
          type: "write_resource",
        },
        {
          address:
            "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
          state_key_hash:
            "0x717afae672dd0d77289166a42e91e16c85d1ea9035424f29e898b42e4010a1e2",
          data: {
            type: "0x1::account::Account",
            data: {
              authentication_key:
                "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
              coin_register_events: {
                counter: "2",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "0",
                  },
                },
              },
              guid_creation_num: "6",
              key_rotation_events: {
                counter: "0",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "1",
                  },
                },
              },
              rotation_capability_offer: {
                for: {
                  vec: [],
                },
              },
              sequence_number: "2",
              signer_capability_offer: {
                for: {
                  vec: [],
                },
              },
            },
          },
          type: "write_resource",
        },
        {
          address:
            "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
          state_key_hash:
            "0x09c6a29ad2fdec4f53d3546268b2497e0272ed7b0d710e3a22c236008ee73ca3",
          data: {
            type: "0x1::coin::CoinStore<0x6e57ae098ab06ecc491d688a255b64b61dd52dbb58d2cce46e7def6013ffc2cd::POP::POP>",
            data: {
              coin: {
                value: "58800000000",
              },
              deposit_events: {
                counter: "2",
                guid: {
                  id: {
                    addr: "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
                    creation_num: "4",
                  },
                },
              },
              frozen: false,
              withdraw_events: {
                counter: "0",
                guid: {
                  id: {
                    addr: "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
                    creation_num: "5",
                  },
                },
              },
            },
          },
          type: "write_resource",
        },
        {
          state_key_hash:
            "0x6e4b28d40f98a106a65163530924c0dcb40c1349d3aa915d108b4d6cfc1ddb19",
          handle:
            "0x1b854694ae746cdbd8d44186ca4929b2b337df21d1c74633be19b2710552fdca",
          key: "0x0619dc29a0aac8fa146714058e8dd6d2d0f3bdf5f6331907bf91f3acd81e6935",
          value: "0x1730a5229cbadc940100000000000000",
          data: null,
          type: "write_table_item",
        },
      ],
      sender:
        "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
      sequence_number: "1",
      max_gas_amount: "200000",
      gas_unit_price: "100",
      expiration_timestamp_secs: "1728498886",
      payload: {
        function: "0x1::aptos_account::transfer_coins",
        type_arguments: [
          "0x6e57ae098ab06ecc491d688a255b64b61dd52dbb58d2cce46e7def6013ffc2cd::POP::POP",
        ],
        arguments: [
          "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
          "55500000000",
        ],
        type: "entry_function_payload",
      },
      signature: {
        public_key:
          "0x73d3914afc1f297a2c1f2d32d388e75f5011d464fc918791659bb70e4018ffa2",
        signature:
          "0xd7dd2143437464bd73c6f1ac429732d263173723492f3c408603731ccf71419b48df021176fad3199a73fded3eafb076d4cef153b0997511c83c04697c9c700e",
        type: "ed25519_signature",
      },
      events: [
        {
          guid: {
            creation_number: "5",
            account_address:
              "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
          },
          sequence_number: "1",
          type: "0x1::coin::WithdrawEvent",
          data: {
            amount: "55500000000",
          },
        },
        {
          guid: {
            creation_number: "4",
            account_address:
              "0xc3df44663b7541bc5ce2793c12814dad216cdf05855c66381a8cb797e6bf9656",
          },
          sequence_number: "1",
          type: "0x1::coin::DepositEvent",
          data: {
            amount: "55500000000",
          },
        },
        {
          guid: {
            creation_number: "0",
            account_address: "0x0",
          },
          sequence_number: "0",
          type: "0x1::transaction_fee::FeeStatement",
          data: {
            execution_gas_units: "4",
            io_gas_units: "5",
            storage_fee_octas: "0",
            storage_fee_refund_octas: "0",
            total_charge_gas_units: "9",
          },
        },
      ],
      timestamp: "1728498875494784",
      type: "user_transaction",
    },
    {
      version: "6166353989",
      hash: "0x711cbab5bcfa048067d14ef2e6f6705d15efcbcaf4e577d57493c928bfdd361e",
      state_change_hash:
        "0x1e4318d13336f1845c36003c835bcbadb3a980ddc309ae17c89214ecc9a297ad",
      event_root_hash:
        "0x6e9e4d27379a2ef4e240ca50408dfba408d72efa99809a98ac1149c552716478",
      state_checkpoint_hash: null,
      gas_used: "5",
      success: true,
      vm_status: "Executed successfully",
      accumulator_root_hash:
        "0xf165f79b19608ebd938d9b9b3478b41d7397d87a0619d4f5b0dc1d1be1b04220",
      changes: [
        {
          address:
            "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
          state_key_hash:
            "0xa503e3371dee8e0a72ca61e105b3dc0ae26826b944af7d8c69443fcc8955fefd",
          data: {
            type: "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
            data: {
              coin: {
                value: "299948500",
              },
              deposit_events: {
                counter: "2",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "2",
                  },
                },
              },
              frozen: false,
              withdraw_events: {
                counter: "0",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "3",
                  },
                },
              },
            },
          },
          type: "write_resource",
        },
        {
          address:
            "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
          state_key_hash:
            "0x717afae672dd0d77289166a42e91e16c85d1ea9035424f29e898b42e4010a1e2",
          data: {
            type: "0x1::account::Account",
            data: {
              authentication_key:
                "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
              coin_register_events: {
                counter: "2",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "0",
                  },
                },
              },
              guid_creation_num: "6",
              key_rotation_events: {
                counter: "0",
                guid: {
                  id: {
                    addr: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
                    creation_num: "1",
                  },
                },
              },
              rotation_capability_offer: {
                for: {
                  vec: [],
                },
              },
              sequence_number: "3",
              signer_capability_offer: {
                for: {
                  vec: [],
                },
              },
            },
          },
          type: "write_resource",
        },
        {
          address:
            "0xa2c26e31b37cc659d8455388ee1423c94c4772f4f46d618ded836936f05fffe1",
          state_key_hash:
            "0x22198c3e570ac923de7f38ca87e6ee5f333c437280d1170b3349a3da39efccff",
          data: {
            type: "0x1::object::ObjectCore",
            data: {
              allow_ungated_transfer: true,
              guid_creation_num: "1125899906842626",
              owner:
                "0x2b26c854845bf68db606b10042261747eda77e170d943e9b43db5bf771685524",
              transfer_events: {
                counter: "7",
                guid: {
                  id: {
                    addr: "0xa2c26e31b37cc659d8455388ee1423c94c4772f4f46d618ded836936f05fffe1",
                    creation_num: "1125899906842624",
                  },
                },
              },
            },
          },
          type: "write_resource",
        },
        {
          address:
            "0xa2c26e31b37cc659d8455388ee1423c94c4772f4f46d618ded836936f05fffe1",
          state_key_hash:
            "0x22198c3e570ac923de7f38ca87e6ee5f333c437280d1170b3349a3da39efccff",
          data: {
            type: "0x4::token::Token",
            data: {
              collection: {
                inner:
                  "0xfce62045f3ac19160c1e88662682ccb6ef1173eba82638b8bae172cc83d8e8b8",
              },
              description: "Aptogotchi Collection Description",
              index: "0",
              mutation_events: {
                counter: "0",
                guid: {
                  id: {
                    addr: "0xa2c26e31b37cc659d8455388ee1423c94c4772f4f46d618ded836936f05fffe1",
                    creation_num: "1125899906842625",
                  },
                },
              },
              name: "",
              uri: "https://otjbxblyfunmfblzdegw.supabase.co/storage/v1/object/public/aptogotchi/aptoaptogotchi.png",
            },
          },
          type: "write_resource",
        },
        {
          address:
            "0xa2c26e31b37cc659d8455388ee1423c94c4772f4f46d618ded836936f05fffe1",
          state_key_hash:
            "0x22198c3e570ac923de7f38ca87e6ee5f333c437280d1170b3349a3da39efccff",
          data: {
            type: "0x4::token::TokenIdentifiers",
            data: {
              index: {
                value: "65",
              },
              name: {
                padding: "0x0000000000000000000000",
                value: "SuperNova",
              },
            },
          },
          type: "write_resource",
        },
        {
          state_key_hash:
            "0x6e4b28d40f98a106a65163530924c0dcb40c1349d3aa915d108b4d6cfc1ddb19",
          handle:
            "0x1b854694ae746cdbd8d44186ca4929b2b337df21d1c74633be19b2710552fdca",
          key: "0x0619dc29a0aac8fa146714058e8dd6d2d0f3bdf5f6331907bf91f3acd81e6935",
          value: "0x02ffc21e927cea940100000000000000",
          data: null,
          type: "write_table_item",
        },
      ],
      sender:
        "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
      sequence_number: "2",
      max_gas_amount: "200000",
      gas_unit_price: "100",
      expiration_timestamp_secs: "1729504765",
      payload: {
        function: "0x1::object::transfer",
        type_arguments: ["0x4::token::Token"],
        arguments: [
          {
            inner:
              "0xa2c26e31b37cc659d8455388ee1423c94c4772f4f46d618ded836936f05fffe1",
          },
          "0x2b26c854845bf68db606b10042261747eda77e170d943e9b43db5bf771685524",
        ],
        type: "entry_function_payload",
      },
      signature: {
        public_key:
          "0x73d3914afc1f297a2c1f2d32d388e75f5011d464fc918791659bb70e4018ffa2",
        signature:
          "0x1f68becb50c3b7abad6aa9c4c873503bff52f0abe80ecf8a0b5cb53bb0466f0d26b842b38b8b92df61f07148f11d338a11fbe3517bf3e1b8165c1a226863080d",
        type: "ed25519_signature",
      },
      events: [
        {
          guid: {
            creation_number: "1125899906842624",
            account_address:
              "0xa2c26e31b37cc659d8455388ee1423c94c4772f4f46d618ded836936f05fffe1",
          },
          sequence_number: "6",
          type: "0x1::object::TransferEvent",
          data: {
            from: "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33",
            object:
              "0xa2c26e31b37cc659d8455388ee1423c94c4772f4f46d618ded836936f05fffe1",
            to: "0x2b26c854845bf68db606b10042261747eda77e170d943e9b43db5bf771685524",
          },
        },
        {
          guid: {
            creation_number: "0",
            account_address: "0x0",
          },
          sequence_number: "0",
          type: "0x1::transaction_fee::FeeStatement",
          data: {
            execution_gas_units: "3",
            io_gas_units: "2",
            storage_fee_octas: "0",
            storage_fee_refund_octas: "0",
            total_charge_gas_units: "5",
          },
        },
      ],
      timestamp: "1729504748521293",
      type: "user_transaction",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextCursor, setNextCursor] = useState<string | null>(null);

  const { publicKey } = usePublicKey();
  const address =
    "0x1fd0f67fd087ed7d63f2de6f6d9682250b8f153eb7ed7bbe655fb46e741edd33";

  const fetchTransactions = async (cursor: string | null = null) => {
    try {
      const limit = 8;
      let url = `https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/transactions?limit=${limit}`;
      if (cursor) {
        url += `&start=${cursor}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch transactions");
      }

      const data: Transaction[] = await response.json();
      setTransactions((prev) => [...prev, ...data]);

      if (data.length === limit) {
        setNextCursor(data[data.length - 1].version);
      } else {
        setNextCursor(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchTransactions();
  // }, []);

  // const getTransactionDetails = (
  //   tx: Transaction
  // ): { amount: number; isSent: boolean; recipient: string } => {
  //   let amount = 0;
  //   let isSent = false;
  //   let recipient = "";

  //   // Check for coin transfer events
  //   const withdrawEvent = tx.events.find(
  //     (event) => event.type === "0x1::coin::WithdrawEvent"
  //   );
  //   const depositEvent = tx.events.find(
  //     (event) => event.type === "0x1::coin::DepositEvent"
  //   );

  //   if (withdrawEvent && tx.sender === address) {
  //     // This is a sent transaction
  //     console.log("send transaction detected");
  //     amount = parseInt(withdrawEvent.data.amount, 10);
  //     isSent = true;
  //     recipient = tx.payload.arguments[0]; // Assuming the first argument is the recipient address
  //   } else if (depositEvent) {
  //     console.log("receive transaction detected");
  //     // This is a received transaction
  //     amount = parseInt(depositEvent.data.amount, 10);
  //     isSent = false;
  //     recipient = tx.sender;
  //   } else if (tx.payload.function.includes("0x1::coin::transfer")) {
  //     // Fallback to checking payload if no event is found
  //     amount = parseInt(tx.payload.arguments[1], 10) || 0;
  //     isSent = tx.sender === address;
  //     recipient = isSent ? tx.payload.arguments[0] : tx.sender;
  //   }

  //   return { amount, isSent, recipient };
  // };
  const getTransactionDetails = (
    tx: Transaction
  ): { amount: number; isSent: boolean; recipient: string } => {
    let amount = 0;
    let isSent = false;
    let recipient = "";

    // 1. Handle Specific Functions Directly
    if (tx.payload.function === "0x1::aptos_account::transfer_coins") {
      amount = parseInt(tx.payload.arguments[1], 10) || 0;
      isSent = tx.sender.toLowerCase() === address.toLowerCase();
      recipient = isSent ? tx.payload.arguments[0] : tx.sender;
    } else if (tx.payload.function === "0x1::coin::transfer") {
      amount = parseInt(tx.payload.arguments[1], 10) || 0;
      isSent = tx.sender.toLowerCase() === address.toLowerCase();
      recipient = isSent ? tx.payload.arguments[0] : tx.sender;
    } else if (tx.payload.function === "0x4::token::transfer") {
      // Example for token transfers - adjust index as needed!
      amount = 0; // Token transfers might not have a separate amount field
      isSent = tx.sender.toLowerCase() === address.toLowerCase();
      recipient = isSent
        ? tx.payload.arguments[1] // Second argument for 0x4::token::transfer
        : tx.sender;
    }
    // Add more 'else if' blocks for other functions you need to support...

    // 2. Check for Events as a Fallback
    else {
      const withdrawEvent = tx.events.find(
        (event) => event.type === "0x1::coin::WithdrawEvent"
      );
      const depositEvent = tx.events.find(
        (event) => event.type === "0x1::coin::DepositEvent"
      );
      const coinRegisterEvent = tx.events.find(
        (event) => event.type === "0x1::account::CoinRegisterEvent"
      );

      if (withdrawEvent && tx.sender.toLowerCase() === address.toLowerCase()) {
        amount = parseInt(withdrawEvent.data.amount, 10);
        isSent = true;
        // Logic to determine recipient from the event data (if available)
        // You might need to inspect withdrawEvent.data further
        recipient = "Recipient Not Determined From Event"; // Replace with actual logic
      } else if (depositEvent) {
        amount = parseInt(depositEvent.data.amount, 10);
        isSent = false;
        recipient = tx.sender;
      } else if (
        coinRegisterEvent &&
        tx.sender.toLowerCase() !== address.toLowerCase()
      ) {
        // Handle CoinRegisterEvent - likely an incoming transaction
        amount = 0; // You'll need to fetch the initial deposit amount separately
        isSent = false;
        recipient = tx.sender;
      }
    }

    return { amount, isSent, recipient };
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 8,
    });
  };

  const convertToWholeTokens = (amount: number) => {
    return amount / 100000000;
  };

  const formatTimestamp = (timestamp: string) => {
    try {
      const microseconds = parseInt(timestamp, 10);
      const milliseconds = microseconds / 1000;
      const date = new Date(milliseconds);
      return format(date, "MMM d, yyyy");
    } catch (error) {
      console.error("Error parsing timestamp:", error);
      return "Unknown date";
    }
  };

  const groupTransactionsByDate = (
    transactions: Transaction[]
  ): GroupedTransactions => {
    return transactions.reduce((groups, transaction) => {
      const date = formatTimestamp(transaction.timestamp);
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(transaction);
      return groups;
    }, {} as GroupedTransactions);
  };

  const groupedTransactions = groupTransactionsByDate(transactions);
  const sortedDates = Object.keys(groupedTransactions).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  if (loading && transactions.length === 0) {
    return <div>Loading transactions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-[#323030] h-full text-white p-4">
      <div className="mb-4 flex items-center">
        <button onClick={() => router.back()} className="text-white">
          <ArrowLeft className="mr-4" />
        </button>
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 flex">
          <p className="text-white font-bold text-lg">Recent Activities</p>
        </div>
      </div>

      {sortedDates.map((date) => (
        <div key={date} className="mb-6 mt-2">
          <h2 className="text-[#9F9F9F] text-base font-bold mb-3">{date}</h2>
          {groupedTransactions[date].map((tx) => {
            const { amount, isSent, recipient } = getTransactionDetails(tx);
            const formattedAmount = convertToWholeTokens(amount);
            return (
              <div
                key={tx.version}
                className="bg-[#1414144F] rounded-2xl p-2 flex items-center justify-between mb-2"
              >
                <div className="flex items-center ">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 relative">
                    <img src="/aptos.svg" alt="Aptos" className="w-8 h-8" />
                    {isSent ? (
                      <img
                        src="/sent.svg"
                        alt=""
                        className="w-4 h-4 absolute -bottom-1 -right-1"
                      />
                    ) : (
                      <img
                        src="/recieved.svg"
                        alt=""
                        className="w-4 h-4 text-green-500 absolute -bottom-1 -right-1"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-base">
                      {isSent ? "Sent" : "Received"}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {isSent ? "To" : "From"} {recipient.slice(0, 6)}...
                      {recipient.slice(-4)}
                    </p>
                  </div>
                </div>
                <p
                  className={`font-semibold ${
                    formattedAmount === 0
                      ? ""
                      : isSent
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {formattedAmount === 0
                    ? "0 APT"
                    : `${isSent ? "-" : "+"}${formatNumber(
                        formattedAmount
                      )} APT`}
                </p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
