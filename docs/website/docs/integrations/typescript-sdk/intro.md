# Getting Started

## Setup
```bash
npm install --save @forjagames/nexus
```

## Getting Started

### Step 1. Import
Once you have done the Setup, you have to import the main classes: `NexusFactory` and `Nexus` from `'@forjagames/nexus'`.
```typescript
import { NexusFactory, Nexus } from '@forjagames/nexus';
```

### Step 2. Initialize the Engine.
You have to initialize the API.

So, you need to call the `initialize` static method from `NexusFactory`, and fill it with your project credentials.

```typescript
const api = await NexusFactory.initialize('PUBLIC KEY', 'SECRET');
```

The `initialize` method can also take additional parameters.

Alternative:

```typescript
//  @param publicKey: string
//  @param secret: string
//  @param requestDriver: 'fetch' | 'axios'

const api = await NexusFactory.initialize('PUBLIC KEY', 'SECRET', { requestDriver: 'fetch' });
```

### Step 3. The initialization is ready. You can start using the APIs.

## Example
```typescript
async function exampleFunction() {
  const api = await NexusFactory.initialize('PUBLIC KEY', 'SECRET');
  
  const storage = api.getStorage();

  const connection = await storage.connectToDrive('DRIVE UUID');
  
  const filesApi = api.getFiles(connection);

  const files = await filesApi.find('*.md');

  return files;
}
```