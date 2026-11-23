import { User } from '../../src/domain/User.js';

/**
 * Object Mother: fornece instâncias fixas e prontas de User.
 * Usuários são entidades simples que raramente mudam entre os testes,
 * então alguns métodos estáticos nomeados bastam.
 */
export class UserMother {
    static umUsuarioPadrao() {
        return new User(1, 'Usuário Padrão', 'padrao@email.com', 'PADRAO');
    }

    static umUsuarioPremium() {
        return new User(2, 'Usuário Premium', 'premium@email.com', 'PREMIUM');
    }
}
