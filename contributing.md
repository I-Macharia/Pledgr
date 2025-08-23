# Contributing to Pledgr

Welcome to Pledgr! We're excited to have you contribute to our decentralized creator staking platform. This guide will help you get started with contributing effectively.

## 🎯 How You Can Contribute

- 🐛 **Bug Reports**: Found a bug? Let us know!
- ✨ **Feature Requests**: Have ideas for new features? We'd love to hear them!
- 📝 **Documentation**: Improve our docs, README, or code comments
- 🔧 **Code Contributions**: Fix bugs, implement features, or improve performance
- 🧪 **Testing**: Help us improve test coverage or find edge cases
- 🎨 **UI/UX**: Enhance the user interface and experience

## 🚀 Getting Started

### 1. Fork & Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/avalanche-adamur-noc.git
cd avalanche-adamur-noc

# Add upstream remote
git remote add upstream https://github.com/Pledger-DAO/avalanche-adamur-noc.git
```

### 2. Set Up Development Environment

Follow the setup instructions in our [README.md](README.md) to get your local environment running.

### 3. Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
# or
git checkout -b docs/what-you-are-documenting
```

## 🌟 Branching Convention

We use the following branch naming convention:

- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-topic` - Documentation updates
- `test/test-description` - Test additions/improvements
- `refactor/what-is-being-refactored` - Code refactoring
- `chore/maintenance-task` - Maintenance tasks

**Examples:**
- `feature/staking-rewards-system`
- `fix/creator-registration-validation`
- `docs/deployment-instructions`
- `test/creator-registry-edge-cases`

## 📝 Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/). Use the following format:

```
type(scope): description

[optional body]

[optional footer]
```

### Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples:
```bash
git commit -m "feat(staking): add reward calculation logic"
git commit -m "fix(frontend): resolve wallet connection issue"
git commit -m "docs(readme): add deployment instructions"
git commit -m "test(creator): add edge case tests for profile updates"
```

## 🔧 Code Style Guidelines

### Smart Contracts (Solidity)

- Follow [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- Use clear, descriptive function and variable names
- Add comprehensive NatSpec comments for all public functions
- Include proper error handling and custom errors
- Write comprehensive tests for all functionality

```solidity
/**
 * @title CreatorRegistry
 * @dev Manages creator profiles and registration
 */
contract CreatorRegistry {
    /// @notice Registers a new creator profile
    /// @param name The creator's display name
    /// @param bio A brief description of the creator
    /// @param avatarUrl URL to the creator's avatar image
    function registerCreator(
        string memory name,
        string memory bio,
        string memory avatarUrl
    ) external {
        // Implementation
    }
}
```

### Frontend (React/TypeScript)

- Use TypeScript strict mode
- Follow React best practices and hooks patterns
- Use functional components with hooks
- Implement proper error boundaries
- Follow the existing folder structure

```typescript
interface CreatorProfile {
  address: string;
  name: string;
  bio: string;
  avatarUrl: string;
  isActive: boolean;
  totalStaked: bigint;
  fanCount: number;
  createdAt: number;
}

const useCreatorProfile = (address: string): CreatorProfile | null => {
  // Hook implementation
};
```

### General Guidelines

- **No `any` types** - Use proper TypeScript typing
- **Error Handling** - Always handle errors gracefully
- **Documentation** - Write clear comments for complex logic
- **DRY Principle** - Don't repeat yourself, create reusable utilities
- **Testing** - Include tests for new functionality

## 🧪 Testing Requirements

### Smart Contracts

All smart contract changes must include comprehensive tests:

```bash
# Run tests
forge test

# Run with coverage
forge coverage

# Run specific test
forge test --match-test testCreatorRegistration
```

### Frontend

Frontend changes should include appropriate tests:

```bash
cd app-registerUI

# Run tests
pnpm test

# Run with coverage
pnpm test:coverage
```

## 🚀 Pull Request Process

### Before Submitting

1. **Update from upstream**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run all tests**:
   ```bash
   # Smart contracts
   forge test
   
   # Frontend
   cd app-registerUI && pnpm test
   ```

3. **Check code formatting**:
   ```bash
   # Solidity
   forge fmt
   
   # Frontend
   cd app-registerUI && pnpm lint
   ```

4. **Update documentation** if needed

### Submitting Your PR

1. **Push your branch**:
   ```bash
   git push origin your-branch-name
   ```

2. **Create Pull Request** on GitHub with:
   - Clear, descriptive title
   - Detailed description of changes
   - Link to any related issues
   - Screenshots/videos for UI changes

3. **PR Template**:
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Refactoring
   
   ## Testing
   - [ ] Tests pass locally
   - [ ] Added new tests if applicable
   
   ## Related Issues
   Closes #123
   ```

### Code Review Process

1. **Automated Checks**: All PRs must pass CI/CD checks
2. **Peer Review**: At least one team member must review
3. **Testing**: Changes must be tested on testnet if applicable
4. **Documentation**: Updates to docs if functionality changes

## 🐛 Reporting Bugs

Use our [GitHub Issues](https://github.com/Pledger-DAO/avalanche-adamur-noc/issues) with the following template:

```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Step 1
2. Step 2
3. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- OS: [e.g. macOS, Windows, Linux]
- Browser: [e.g. Chrome, Firefox]
- Node version: [e.g. 18.0.0]
- Contract address: [if applicable]
```

## 💡 Feature Requests

For new features, create an issue with:
- **Feature description**
- **Use case/motivation**
- **Proposed implementation** (if you have ideas)
- **Additional context**

## 🏆 Recognition

Contributors who make significant contributions will be:
- Added to our README contributors section
- Mentioned in release notes
- Eligible for contributor NFTs (coming soon!)

## 💬 Questions?

- 📧 **Email**: jimlestonosoi42@gmail.com
- 💬 **Discord**: [Join our community](https://discord.gg/pledgr)
- 🐦 **Twitter**: [@PledgrDAO](https://twitter.com/PledgrDAO)

## 📄 Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

### Our Standards

- **Be respectful** of differing viewpoints and experiences
- **Be collaborative** and help others learn
- **Be inclusive** and welcoming to newcomers
- **Focus on what's best** for the community and project

## 🎉 First Time Contributing?

Look for issues labeled `good-first-issue` or `help-wanted`. These are great starting points for new contributors!

---

Thank you for contributing to Pledgr! Together, we're building the future of creator economy on Web3. 🚀