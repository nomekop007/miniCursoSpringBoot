package com.curso.curso.dao;

import com.curso.curso.models.Usuario;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();


    void eliminar(Long id);

    void registrar(Usuario usuario);

    Usuario findUserByEmail(String email);


    boolean verificarCredenciales(Usuario usuario);
}
