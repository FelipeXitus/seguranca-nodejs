const uuid = require('uuid')
const database = require('../models')
const { hash } = require('bcryptjs')

class UsuarioService {
    async cadastrar(dto) {
        const usuario = await database.usuarios.findOne({
            where: {
                email: dto.email
            }
        });

        if (usuario) {
            throw new Error('Usuário já existe')
        }

        try {
            const senhaHash = await hash(dto.senha, 10)
            const novoUsuario = await database.usuarios.create({
                id: uuid.v4(),
                nome: dto.nome,
                email: dto.email,
                senha: senhaHash
            });
            return novoUsuario
        } catch (error) {
            throw new Error('Erro ao cadastrar usuário')
        }

        return novoUsuario
    }

    async buscar() {
        const usuarios = await database.usuarios.findAll()
        return usuarios
    }

    async buscarPorId(id) {
        const usuario = await database.usuarios.findOne({
            where: {
                id
            }
        })
        return usuario
    }

    async deletar(id) {
        await database.usuarios.destroy({
            where: {
                id
            }
        })
    }

    async atualizar(dto, id) {
        const usuario = await database.usuarios.findOne({
            where: {
                id
            }
        })
        if (!usuario) {
            throw new Error('Usuário não encontrado')
        }
        const senhaHash = await hash(dto.senha, 10)
        await database.usuarios.update(
            {
                nome: dto.nome,
                email: dto.email
            },
            {
                where: {
                    id
                }
            }
        )
    }

    async atualizarSenha(dto, id) {
        const usuario = await database.usuarios.findOne({
            where: {
                id
            }
        })
        if (!usuario) {
            throw new Error('Usuário não encontrado')
        }
        const senhaHash = await hash(dto.senha, 10)
        await database.usuarios.update(
            {
                senha: senhaHash
            },
            {
                where: {
                    id
                }
            }
        )
    }
}

module.exports = UsuarioService