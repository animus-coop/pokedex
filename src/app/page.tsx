import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <img src="/images/logo.png" alt="Pokemon" />
        <h2 className={styles.title}>Nuestro listado de pokemones</h2>
      </header>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.search}
          placeholder="Buscar por nombre"
        />
        <button className={styles.searchButton}>
          <img src="/images/search.svg" alt="Search" />
        </button>
      </div>
      <section className={styles.pokemonList}>
        <div className={styles.pokemon}>
          <div className={styles.pokemonTitle}>
            Venusaur
            <button className={styles.delete}>
              <img src="/images/x.svg" alt="Delete" />
            </button>
          </div>
          <div className={styles.pokemonDescription}>
            <div className={styles.pokemonImage}>
              <img src="/images/pokemon.png" alt="Nombre del pokemon" />
            </div>
            <div className={styles.pokemonDetails}>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>HP</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Attack</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Defense</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Sp attack</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Sp defense</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.pokemon}>
          <div className={styles.pokemonTitle}>
            Venusaur
            <button className={styles.delete}>
              <img src="/images/x.svg" alt="Delete" />
            </button>
          </div>
          <div className={styles.pokemonDescription}>
            <div className={styles.pokemonImage}>
              <img src="/images/pokemon.png" alt="Nombre del pokemon" />
            </div>
            <div className={styles.pokemonDetails}>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>HP</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Attack</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Defense</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Sp attack</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Sp defense</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.pokemon}>
          <div className={styles.pokemonTitle}>
            Venusaur
            <button className={styles.delete}>
              <img src="/images/x.svg" alt="Delete" />
            </button>
          </div>
          <div className={styles.pokemonDescription}>
            <div className={styles.pokemonImage}>
              <img src="/images/pokemon.png" alt="Nombre del pokemon" />
            </div>
            <div className={styles.pokemonDetails}>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>HP</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Attack</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Defense</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Sp attack</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Sp defense</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.pokemon}>
          <div className={styles.pokemonTitle}>
            Venusaur
            <button className={styles.delete}>
              <img src="/images/x.svg" alt="Delete" />
            </button>
          </div>
          <div className={styles.pokemonDescription}>
            <div className={styles.pokemonImage}>
              <img src="/images/pokemon.png" alt="Nombre del pokemon" />
            </div>
            <div className={styles.pokemonDetails}>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>HP</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Attack</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Defense</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Sp attack</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
              <div className={styles.pokemonDetailsRow}>
                <span className={styles.label}>Sp defense</span>
                <div className={styles.pokemonValueBar}>
                  <div className={styles.pokemonValue}>80</div>
                  <div className={styles.pokemonBar}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button}>Cargar más</button>
      </section>
    </main>
  );
}
