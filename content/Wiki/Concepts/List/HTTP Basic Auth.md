* [Traefik](../../../Software/List/Traefik.md)
	* [Traefik BasicAuth Documentation - Traefik](https://doc.traefik.io/traefik/middlewares/http/basicauth/)


``` yaml
# Declaring the user list
#
# Note: when used in docker-compose.yml all dollar signs in the hash need to be doubled for escaping.
# To create a user:password pair, the following command can be used:
# echo $(htpasswd -nb user password) | sed -e s/\\$/\\$\\$/g
#
# Also note that dollar signs should NOT be doubled when they not evaluated (e.g. Ansible docker_container module).
labels:
  - "traefik.http.middlewares.test-auth.basicauth.users=test:$$apr1$$H6uskkkW$$IgXLP6ewTrSuBkTrqE8wj/,test2:$$apr1$$d9hr9HBB$$4HxwgUir3HP4EsggP/QNo0"
```