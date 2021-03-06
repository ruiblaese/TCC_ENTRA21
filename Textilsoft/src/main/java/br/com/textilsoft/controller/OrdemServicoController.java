package br.com.textilsoft.controller;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.textilsoft.dao.OrdemServicoDAO;
import br.com.textilsoft.model.OrdemServico;


@Path("ordemServicos")
public class OrdemServicoController {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/")
	public List<OrdemServico> listOrdemServicos() {
		try {
			OrdemServicoDAO OrdemServicoDAO = new OrdemServicoDAO();
			return OrdemServicoDAO.listar();
		} catch (Exception ex) {
			Logger.getLogger(OrdemServicoController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("{id}/")
	public OrdemServico getOrdemServico(@PathParam("id") long idOrdemServico) {
		try {
			OrdemServicoDAO OrdemServicoDAO = new OrdemServicoDAO();
			return OrdemServicoDAO.selecionar(idOrdemServico);
		} catch (Exception ex) {
			Logger.getLogger(OrdemServicoController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/")
	public Response create(OrdemServico ordemServico) {
		try {
			OrdemServicoDAO OrdemServicoDAO = new OrdemServicoDAO();
			OrdemServicoDAO.inserir(ordemServico);

			return Response.status(Response.Status.CREATED).build();
		} catch (Exception ex) {
			Logger.getLogger(OrdemServicoController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/")
	public Response update(OrdemServico ordemServico) {
		try {

			OrdemServicoDAO OrdemServicoDAO = new OrdemServicoDAO();
			OrdemServicoDAO.alterar(ordemServico);
			return Response.status(Response.Status.NO_CONTENT).build();
		} catch (Exception ex) {
			Logger.getLogger(OrdemServicoController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	@DELETE
	@Path("{id}/")
	public Response delete(@PathParam("id") long idOrdemServico) {
		try {
			OrdemServicoDAO OrdemServicoDAO = new OrdemServicoDAO();
			OrdemServicoDAO.excluir(idOrdemServico);
			return Response.status(Response.Status.OK).build();
		} catch (Exception ex) {
			Logger.getLogger(OrdemServicoController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

}
