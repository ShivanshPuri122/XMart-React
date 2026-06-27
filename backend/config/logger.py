from backend.config.settings import settings
import logging
from pathlib import Path

log_path=Path(settings.LOG_DIR)
log_path.mkdir(parents=True, exist_ok=True)

log_file=log_path / "app.log"

logging.basicConfig(
    filename=log_file,
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)





