export const owls = [
  {
    name: 'UpgradeableImpl',
    type: 'impl',
    interface_name: 'openzeppelin::upgrades::interface::IUpgradeable'
  },
  {
    name: 'openzeppelin::upgrades::interface::IUpgradeable',
    type: 'interface',
    items: [
      {
        name: 'upgrade',
        type: 'function',
        inputs: [
          {
            name: 'new_class_hash',
            type: 'core::starknet::class_hash::ClassHash'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      }
    ]
  },
  {
    name: 'Owls',
    type: 'impl',
    interface_name: 'owls::owls::IOwls'
  },
  {
    name: 'core::integer::u256',
    type: 'struct',
    members: [
      {
        name: 'low',
        type: 'core::integer::u128'
      },
      {
        name: 'high',
        type: 'core::integer::u128'
      }
    ]
  },
  {
    name: 'owls::owls::IOwls',
    type: 'interface',
    items: [
      {
        name: 'maxSupply',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'mint',
        type: 'function',
        inputs: [],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'name',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'symbol',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'token_uri',
        type: 'function',
        inputs: [
          {
            name: 'token_id',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::array::Array::<core::felt252>'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'tokenURI',
        type: 'function',
        inputs: [
          {
            name: 'tokenId',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::array::Array::<core::felt252>'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'totalSupply',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      }
    ]
  },
  {
    name: 'ERC721Impl',
    type: 'impl',
    interface_name: 'openzeppelin::token::erc721::interface::IERC721'
  },
  {
    name: 'core::array::Span::<core::felt252>',
    type: 'struct',
    members: [
      {
        name: 'snapshot',
        type: '@core::array::Array::<core::felt252>'
      }
    ]
  },
  {
    name: 'core::bool',
    type: 'enum',
    variants: [
      {
        name: 'False',
        type: '()'
      },
      {
        name: 'True',
        type: '()'
      }
    ]
  },
  {
    name: 'openzeppelin::token::erc721::interface::IERC721',
    type: 'interface',
    items: [
      {
        name: 'balance_of',
        type: 'function',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'owner_of',
        type: 'function',
        inputs: [
          {
            name: 'token_id',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'safe_transfer_from',
        type: 'function',
        inputs: [
          {
            name: 'from',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'to',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'token_id',
            type: 'core::integer::u256'
          },
          {
            name: 'data',
            type: 'core::array::Span::<core::felt252>'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'transfer_from',
        type: 'function',
        inputs: [
          {
            name: 'from',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'to',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'token_id',
            type: 'core::integer::u256'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'approve',
        type: 'function',
        inputs: [
          {
            name: 'to',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'token_id',
            type: 'core::integer::u256'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'set_approval_for_all',
        type: 'function',
        inputs: [
          {
            name: 'operator',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'approved',
            type: 'core::bool'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'get_approved',
        type: 'function',
        inputs: [
          {
            name: 'token_id',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'is_approved_for_all',
        type: 'function',
        inputs: [
          {
            name: 'owner',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'operator',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [
          {
            type: 'core::bool'
          }
        ],
        state_mutability: 'view'
      }
    ]
  },
  {
    name: 'ERC721CamelOnlyImpl',
    type: 'impl',
    interface_name: 'openzeppelin::token::erc721::interface::IERC721CamelOnly'
  },
  {
    name: 'openzeppelin::token::erc721::interface::IERC721CamelOnly',
    type: 'interface',
    items: [
      {
        name: 'balanceOf',
        type: 'function',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'ownerOf',
        type: 'function',
        inputs: [
          {
            name: 'tokenId',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'safeTransferFrom',
        type: 'function',
        inputs: [
          {
            name: 'from',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'to',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'tokenId',
            type: 'core::integer::u256'
          },
          {
            name: 'data',
            type: 'core::array::Span::<core::felt252>'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'transferFrom',
        type: 'function',
        inputs: [
          {
            name: 'from',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'to',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'tokenId',
            type: 'core::integer::u256'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'setApprovalForAll',
        type: 'function',
        inputs: [
          {
            name: 'operator',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'approved',
            type: 'core::bool'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'getApproved',
        type: 'function',
        inputs: [
          {
            name: 'tokenId',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'isApprovedForAll',
        type: 'function',
        inputs: [
          {
            name: 'owner',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'operator',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [
          {
            type: 'core::bool'
          }
        ],
        state_mutability: 'view'
      }
    ]
  },
  {
    name: 'SRC5Impl',
    type: 'impl',
    interface_name: 'openzeppelin::introspection::interface::ISRC5'
  },
  {
    name: 'openzeppelin::introspection::interface::ISRC5',
    type: 'interface',
    items: [
      {
        name: 'supports_interface',
        type: 'function',
        inputs: [
          {
            name: 'interface_id',
            type: 'core::felt252'
          }
        ],
        outputs: [
          {
            type: 'core::bool'
          }
        ],
        state_mutability: 'view'
      }
    ]
  },
  {
    name: 'SRC5CamelImpl',
    type: 'impl',
    interface_name: 'openzeppelin::introspection::interface::ISRC5Camel'
  },
  {
    name: 'openzeppelin::introspection::interface::ISRC5Camel',
    type: 'interface',
    items: [
      {
        name: 'supportsInterface',
        type: 'function',
        inputs: [
          {
            name: 'interfaceId',
            type: 'core::felt252'
          }
        ],
        outputs: [
          {
            type: 'core::bool'
          }
        ],
        state_mutability: 'view'
      }
    ]
  },
  {
    name: 'OwnableImpl',
    type: 'impl',
    interface_name: 'openzeppelin::access::ownable::interface::IOwnable'
  },
  {
    name: 'openzeppelin::access::ownable::interface::IOwnable',
    type: 'interface',
    items: [
      {
        name: 'owner',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'transfer_ownership',
        type: 'function',
        inputs: [
          {
            name: 'new_owner',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'renounce_ownership',
        type: 'function',
        inputs: [],
        outputs: [],
        state_mutability: 'external'
      }
    ]
  },
  {
    name: 'constructor',
    type: 'constructor',
    inputs: [
      {
        name: 'name',
        type: 'core::felt252'
      },
      {
        name: 'symbol',
        type: 'core::felt252'
      },
      {
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'openzeppelin::token::erc721::erc721::ERC721Component::Transfer',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'from',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'to',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'token_id',
        type: 'core::integer::u256'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'openzeppelin::token::erc721::erc721::ERC721Component::Approval',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'approved',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'token_id',
        type: 'core::integer::u256'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'openzeppelin::token::erc721::erc721::ERC721Component::ApprovalForAll',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'operator',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'data',
        name: 'approved',
        type: 'core::bool'
      }
    ]
  },
  {
    kind: 'enum',
    name: 'openzeppelin::token::erc721::erc721::ERC721Component::Event',
    type: 'event',
    variants: [
      {
        kind: 'nested',
        name: 'Transfer',
        type: 'openzeppelin::token::erc721::erc721::ERC721Component::Transfer'
      },
      {
        kind: 'nested',
        name: 'Approval',
        type: 'openzeppelin::token::erc721::erc721::ERC721Component::Approval'
      },
      {
        kind: 'nested',
        name: 'ApprovalForAll',
        type: 'openzeppelin::token::erc721::erc721::ERC721Component::ApprovalForAll'
      }
    ]
  },
  {
    kind: 'enum',
    name: 'openzeppelin::introspection::src5::SRC5Component::Event',
    type: 'event',
    variants: []
  },
  {
    kind: 'struct',
    name: 'openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'previous_owner',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'new_owner',
        type: 'core::starknet::contract_address::ContractAddress'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'previous_owner',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'new_owner',
        type: 'core::starknet::contract_address::ContractAddress'
      }
    ]
  },
  {
    kind: 'enum',
    name: 'openzeppelin::access::ownable::ownable::OwnableComponent::Event',
    type: 'event',
    variants: [
      {
        kind: 'nested',
        name: 'OwnershipTransferred',
        type: 'openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred'
      },
      {
        kind: 'nested',
        name: 'OwnershipTransferStarted',
        type: 'openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'openzeppelin::upgrades::upgradeable::UpgradeableComponent::Upgraded',
    type: 'event',
    members: [
      {
        kind: 'data',
        name: 'class_hash',
        type: 'core::starknet::class_hash::ClassHash'
      }
    ]
  },
  {
    kind: 'enum',
    name: 'openzeppelin::upgrades::upgradeable::UpgradeableComponent::Event',
    type: 'event',
    variants: [
      {
        kind: 'nested',
        name: 'Upgraded',
        type: 'openzeppelin::upgrades::upgradeable::UpgradeableComponent::Upgraded'
      }
    ]
  },
  {
    kind: 'enum',
    name: 'owls::owls::Owls::Event',
    type: 'event',
    variants: [
      {
        kind: 'flat',
        name: 'ERC721Event',
        type: 'openzeppelin::token::erc721::erc721::ERC721Component::Event'
      },
      {
        kind: 'flat',
        name: 'SRC5Event',
        type: 'openzeppelin::introspection::src5::SRC5Component::Event'
      },
      {
        kind: 'flat',
        name: 'OwnableEvent',
        type: 'openzeppelin::access::ownable::ownable::OwnableComponent::Event'
      },
      {
        kind: 'flat',
        name: 'UpgradeableEvent',
        type: 'openzeppelin::upgrades::upgradeable::UpgradeableComponent::Event'
      }
    ]
  }
]
